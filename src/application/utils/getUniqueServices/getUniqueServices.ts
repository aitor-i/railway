import { FetchedServices } from "@/services/graphql/graphql-types";

export function getUniqueServices(services: FetchedServices): FetchedServices {
  const uniqueServices = new Set<string>();
  return services.filter(service => {
    const serviceId = service.node.id;
    if (uniqueServices.has(serviceId)) {
      return false;
    }
    uniqueServices.add(serviceId);
    return true;
  });
}

