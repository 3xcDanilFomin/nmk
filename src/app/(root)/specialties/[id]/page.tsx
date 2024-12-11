import { Slider, Tabs } from "@/components";

export default  async function SpecialtieDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id;
    console.log(id);
  return (
    <main className='flex flex-col gap-24 py-12'>
      <div className='w-full flex flex-col gap-12 max-w-screen-xl mx-auto px-3 '>
        <div className="w-full grid grid-cols-4 grid-rows-8 gap-x-6 gap-y-3">
            <div className="w-full h-full min-h-[460] col-span-2 row-span-8">
                <Slider/>
            </div>
            <h1 className="col-span-2 text-center text-2xl text-blue-700 font-semibold leading-none">Сетевое и системное администрирование</h1>
            <div className="w-full h-full col-span-2 row-span-7 shadow shadow-zinc-700 p-3 rounded-lg">
                <Tabs />
            </div>
        </div>
        <div className="w-full h-full">
            <p className="indent-6 text-zinc-800">
                Сфера деятельности выпускников колледжа по специальности «Сетевое и системное администрирование» не ограничена. Они готовы к профессиональной деятельности в качестве техника в проектных и научно-исследовательских институтах, на производственных и промышленных предприятиях, производящих или эксплуатирующих средства вычислительной техники, в вычислительных центрах, лабораториях, отделах учреждений и организаций, различных организационно-правовых форм, создающих и использующих в профессиональной деятельности различные формы средств вычислительной техники.
            </p>
        </div>
      </div>
    </main>
  );
}