
const Footer = () =>{
  return (
    <footer>
        <section class="bg-black  xsm:w-full mx-auto">
            <div class="bg-repeat-x h-6 relative -top-4"></div>

            <div class="container mx-auto text-center py-10 w-2/3">
                <div class="pb-5">
                    <a href="https://wa.link/5rbb9h" class="xl:text-2xl my-4 inline-block py-2 px-16 bg-red-500 text-white font-black border-transparent border-8 rounded-3xl hover:border-gray-200 hover:bg-white hover:text-black transition duration-200 group" target="_blank" rel="noreferrer">
                        Contactanos
                        <span class="w-4 h-4 inline-block border-yellow-300 border-solid border-t-[5px] border-r-[5px] transition-all transform rotate-45 group-hover:border-red-500 xl:group-hover:ml-4"></span>
                    </a>
                </div>

                <div class="text-white">
                    <p class="py-2">@Todos los derechos reservados Ecoambiental 2023</p>
                </div>
            </div>
        </section>
    </footer>    
  );
}

export default Footer;