import { t1 } from "../../assets/home/trusted";
import SectionTitle from "./SectionTitle";

export default function Trusted() {
  return (
    <section className="mt-14 bg-red-50 rounded-md py-24">
      <div className="text-[#410F11] flex items-center md:justify-around px-4 gap-4 flex-wrap justify-center">
        <SectionTitle title="trusted by" classes="text-[#410F11] " />
        <div className="xl:justify-center gap-4 xl:mt-0 mt-6">
          <img src={t1} alt="broken" className="w-400 h-100 mb-4" />
        </div>
      </div>
    </section>
  );
}