import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
} from '@chakra-ui/react';
import { ISelectOption } from '../../../types/components/selectInput/selectInput.types';
import { errorMessageStyle } from '../../styles';

export default function SelectInput({
  label,
  list,
  register,
  errorMessage,
  required,
}: {
  label: string;
  list: ISelectOption[];
  register: any;
  required?: boolean;
  errorMessage?: string | undefined;
}) {
  return (
    <FormControl isInvalid={errorMessage ? true : false} isRequired={required}>
      <FormLabel variant='primary'>{label}</FormLabel>
      <Select fontSize={['0.9rem', '1rem']} {...register}>
        <option value={0}>Select a option</option>
        {list.map((listItem) => (
          <option key={listItem.id} value={listItem.value}>
            {listItem.option}
          </option>
        ))}
      </Select>
      <FormErrorMessage sx={errorMessageStyle}>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
}
