import { describe, it, expect } from 'vitest';
import { getUniqueServices } from './getUniqueServices';
import { Service } from '@/server-actions/railway-services/fetch-services';

describe('getUniqueServices Tests', () => {
  it('should return a single unique service when given duplicates', () => {
    const services = [
      {
        __typename: 'ProjectServicesConnectionEdge',
        node: {
          __typename: 'Service',
          id: '123',
          name: 'Service A',
        },
      },
      {
        __typename: 'ProjectServicesConnectionEdge',
        node: {
          __typename: 'Service',
          id: '123',
          name: 'Service A',
        },
      },
    ];

    const result = getUniqueServices(services);
    expect(result.length).toBe(1);
  });

  it('should return all unique services when none are duplicates', () => {
    const services = [
      {
        __typename: 'ProjectServicesConnectionEdge',
        node: {
          __typename: 'Service',
          id: '123',
          name: 'Service A',
        },
      },
      {
        __typename: 'ProjectServicesConnectionEdge',
        node: {
          __typename: 'Service',
          id: '124',
          name: 'Service B',
        },
      },
    ];

    const result = getUniqueServices(services);
    expect(result.length).toBe(2);
  });

  it('should return an empty array when given no services', () => {
    const services: Service[] = [];

    const result = getUniqueServices(services);
    expect(result.length).toBe(0);
  });

  // Test with mixed duplicates and unique services
  it('should return only unique services when some are duplicates', () => {
    const services = [
      {
        __typename: 'ProjectServicesConnectionEdge',
        node: {
          __typename: 'Service',
          id: '123',
          name: 'Service A',
        },
      },
      {
        __typename: 'ProjectServicesConnectionEdge',
        node: {
          __typename: 'Service',
          id: '124',
          name: 'Service B',
        },
      },
      {
        __typename: 'ProjectServicesConnectionEdge',
        node: {
          __typename: 'Service',
          id: '123',
          name: 'Service A',
        },
      },
    ];

    const result = getUniqueServices(services);
    expect(result.length).toBe(2);
  });
});
