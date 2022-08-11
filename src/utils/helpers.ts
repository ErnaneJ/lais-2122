export const translateCrumb = (crumb: string):string => {
  return {
    'parceiros': 'Parceiros',
  }[crumb] as string;
}