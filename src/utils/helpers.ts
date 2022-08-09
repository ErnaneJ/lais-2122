export const translateCrumb = (crumb: string):string => {
  return {
    'parceiros': 'Parceiros',
  }[crumb] as string;
}

export const paramsToQuery = (search: string):URLSearchParams => {
  return new URLSearchParams(search);
}
