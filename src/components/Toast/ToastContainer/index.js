import ToastMessage from '../ToastMessage';
import { Conatiner } from './styles';

export default function ToastContainer() {
  return (
    <Conatiner>
      <ToastMessage text="Default toast" />
      <ToastMessage text="Error toast" type="danger" />
      <ToastMessage text="Success toast" type="success" />
    </Conatiner>
  );
}
