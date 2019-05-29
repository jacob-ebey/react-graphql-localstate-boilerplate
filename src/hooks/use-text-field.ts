import * as React from 'react';

export type UseTextField = [
  string,
  React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  React.Dispatch<React.SetStateAction<string>>
]

export default function useTextField(initialValue: string = ''): UseTextField {
  const [value, setValue] = React.useState(initialValue);

  const onChange = React.useCallback<React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>>((event) => {
    setValue(event.target.value)
  }, [setValue]);

  return [value, onChange, setValue];
}
