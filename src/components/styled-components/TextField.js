import styled from 'styled-components';
import MuiTextField from '@material-ui/core/TextField';

const InputField = styled(MuiTextField)`
  &.MuiFormControl-root {
    margin: 7px 0;
    width: 100%;
    max-width: 480px;
  }

  .MuiFormLabel-root {
    &.Mui-focused {
      color: #fd9707;
    }
  }

  .MuiOutlinedInput-root {
    &:hover {
      .MuiOutlinedInput-notchedOutline {
        border: 1px solid #fd9707;
      }
    }

    &.Mui-focused {
      color: #fd9707;

      .MuiOutlinedInput-notchedOutline {
        border: 1px solid #fd9707;
      }
    }
  }
`;

export default InputField;
