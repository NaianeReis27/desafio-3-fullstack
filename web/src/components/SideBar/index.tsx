import Side from "./styles";

interface Iprops {
   animation: boolean
}

function SideBar({animation}: Iprops) {
   const exit = () => {
      localStorage.removeItem("@TOKEN");
      window.location.reload();
    };
  
  return (
     <Side animation={animation}>
        <button>Perfil</button>
        <button>Dashborard</button>
        <button onClick={exit}>Sair</button>
     </Side>
  );
}

export default SideBar;
