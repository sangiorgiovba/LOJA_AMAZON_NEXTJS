import { userInfo } from "os";
import { LuMenu } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { StateProps } from "../../../type";
import { signOut } from "next-auth/react";
import { removeUser } from "@/store/nextSlice";

const BottomHeader = () => {
    const dispatch = useDispatch();
    const { userInfo } = useSelector(
       (state: StateProps) =>state.next
    );

    const handleSignOut = () =>{
        signOut();
        dispatch(removeUser());
    };

  return (
    <div className="w-full h-10 bg-amazon_light text-sm text-white px-4 flex items-center">
        <p className="flex items-center gap-1 h-8 px-2 border border-transparent
        hover:border-white cursor-pointer duration-300">
            <LuMenu className="text-xl" /> Todos 
        </p>
        <p className="hidden md:inline-flex items-center gap-1 h-8 px-2 border border-transparent
        hover:border-white cursor-pointer duration-300">
            Ofertas do dia
        </p>
        <p className="hidden md:inline-flex items-center gap-1 h-8 px-2 border border-transparent
        hover:border-white cursor-pointer duration-300">
            Atendimento ao cliente
        </p>
        <p className="hidden md:inline-flex items-center gap-1 h-8 px-2 border border-transparent
        hover:border-white cursor-pointer duration-300">
            Cadastrar
        </p>
        <p className="hidden md:inline-flex items-center gap-1 h-8 px-2 border border-transparent
        hover:border-white cursor-pointer duration-300">
           Cartoes de presentes
        </p>
        <p className="hidden md:inline-flex items-center gap-1 h-8 px-2 border border-transparent
        hover:border-white cursor-pointer duration-300">
           Vendas
        </p>
        {userInfo && (
        <button onClick={handleSignOut} className="hidden md:inline-flex items-center gap-1 h-8 px-2 border border-transparent
            hover:border-white cursor-pointer duration-300">
           Sair
        </button>
        )}
        
    </div>
  );
};

export default BottomHeader;