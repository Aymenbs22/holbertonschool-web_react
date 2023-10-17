import { schema, normalize } from 'normalizr';

export function coursesNormalizer(data){
    const normalized = normalize(data, notification);
    return normalized;
}