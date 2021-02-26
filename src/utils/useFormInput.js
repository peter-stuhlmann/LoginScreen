import { useState } from 'react';

export default function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setError(null);
    setValue(e.target.value);
  };

  const handleClear = () => {
    setError(null);
    setValue(initialValue);
  };

  const resetValue = () => {
    setError(null);
    setValue(initialValue);
  };

  return {
    value,
    error,
    setError,
    onChange: handleChange,
    onClear: handleClear,
    onReset: resetValue,
  };
}
