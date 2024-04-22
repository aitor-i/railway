export function getUniqueServices(services: Service[]): Service[] {
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

