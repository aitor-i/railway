'use client';
import React, { useState } from 'react';
import Button from '../ui/Button/Button';
import Input from '../ui/Input/Input';
import { isDockerImage } from '@/application/utils/isDockerImage/isDockerImage';
import { buildContainerFromImage } from '@/server-actions/railway-services/build-container-from-image';

interface Props {
  projectId: string
}

export default function NewServiceCard({ projectId }: Props) {
  const [formErrors, setFormErrors] = useState<{ serviceName?: string; dockerImage?: string }>({});

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const dockerImage = formData.get("docker-image")?.toString() ?? "";
    const serviceName = formData.get("service-name")?.toString() ?? "";

    const isDockerImageValid = isDockerImage(dockerImage);
    const errors: { serviceName?: string; dockerImage?: string } = {};

    if (!isDockerImageValid) {
      errors.dockerImage = "Invalid Docker image format.";
    }

    if (!serviceName) {
      errors.serviceName = "Service name is required.";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log("Form is valid. Proceed with submission...");
    }
    const res = await buildContainerFromImage(projectId, dockerImage)
    console.log("RES: ", res)
  };

  return (
    <div>
      <h3 className="mb-4 text-xl">Add new service</h3>
      <form className="flex flex-col gap-2" onSubmit={onSubmitHandler}>
        <Input
          type="text"
          placeholder="Enter service name"
          name="service-name"
          required
        />
        {formErrors.serviceName && <span className="text-red-500">{formErrors.serviceName}</span>}

        <Input
          type="text"
          placeholder="Enter Docker image"
          name="docker-image"
          required
        />
        {formErrors.dockerImage && <span className="text-red-500">{formErrors.dockerImage}</span>}

        <Button type="submit">Deploy</Button>
      </form>
    </div>
  );
}
