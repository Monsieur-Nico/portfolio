export default function Social() {
  return (
    <ul className="flex justify-evenly items-center list-none p-8 rounded-2xl h-[100px] relative xl:order-last">
      <li className="flex justify-center items-center text-center rounded-full w-[50px] h-[50px] transition delay-100 opacity-80">
        <a
          className="fab fa-twitter text-[35px] hover:text-[#1DA1F2] hover:cursor-pointer transition-colors delay-200 ease-linear rounded-full"
          href="https://twitter.com/nicoscriptcodes"
          target="_blank"
        />
      </li>
      <li className="flex justify-center items-center text-center rounded-full w-[50px] h-[50px] transition delay-100">
        <a
          className="fab fa-instagram text-[35px] hover:text-[#fb3958] hover:cursor-pointer transition-colors delay-200 ease-linear rounded-full"
          href="https://www.instagram.com/nicoscriptcodes/"
          target="_blank"
        />
      </li>
      <li className="flex justify-center items-center text-center rounded-full w-[50px] h-[50px] transition delay-100">
        <a
          className="fab fa-linkedin-in text-[35px] hover:text-[#0077B5] hover:cursor-pointer transition-colors delay-200 ease-linear rounded-full"
          href="https://www.linkedin.com/in/monsieur-nico/"
          target="_blank"
        />
      </li>
      <li className="flex justify-center items-center text-center rounded-full w-[50px] h-[50px] transition delay-100">
        <a
          className="fab fa-github text-[35px] hover:text-[#e8eaea] hover:cursor-pointer transition-colors delay-200 ease-linear rounded-full"
          href="https://github.com/Monsieur-Nico"
          target="_blank"
        />
      </li>
    </ul>
  );
}
