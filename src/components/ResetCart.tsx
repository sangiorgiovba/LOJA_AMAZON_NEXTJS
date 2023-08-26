import { resetCart } from "@/store/nextSlice";
import { useDispatch } from "react-redux";

const ResetCart = () => {
  const dispatch = useDispatch();
  const handleResetCart = () => {
    const confirmReset = window.confirm(
      "DESEJA REALMENTE LIMPAR TODOS PRODUTOS DO CARRINHO?"
    );
    if (confirmReset) {
      dispatch(resetCart());
    }
  };
  return (
    <button onClick={handleResetCart} className='w-44 h-10 font-semibold bg-yellow-500 rounded-lg
    hover:bg-red-600 hover:text-white duration-300'>
        Limpar Carrinho
    </button>
  );
};

export default ResetCart;