function formatCpfForReturn(cpf: string) {
  const array = cpf.split('');
  array[3] = '*';
  array[4] = '*';
  array[5] = '*';
  array[6] = '*';
  array[7] = '*';
  array[8] = '*';

  return array.join('');
}

export { formatCpfForReturn };
