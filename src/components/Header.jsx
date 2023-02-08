
const Header = () =>{
  return (
    <header>
      <div class="mx-auto">
      <nav class="bg-red-500 flex justify-between lg:justify-start items-center">
        <div class="logo flex-initial p-2 w-1/6">
                <img src="https://consultoraecoambiental.com/wp-content/uploads/2023/02/isotipo_negativo.png" width="100" alt=""/>
        </div>
            <div class="lg:block hidden w-1/6 md:w-4/6">
                <ul class="flex menu items-center justify-center gap-5">
                    <li><a href="/"class="border-4 border-yellow-400 text-white font-bold p-2 rounded-full align-middle transition duration-500 hover:bg-white hover:text-black">Inicio</a></li>
                    <li><a href="/decreate"class="rounded-full bg-red-500 text-white font-bold px-4 py-3 hover:bg-white hover:text-black transition duration-500">Nosotros</a></li>
                </ul>
            </div>  
        </nav>
      </div>
    </header>    
  );
}

export default Header;