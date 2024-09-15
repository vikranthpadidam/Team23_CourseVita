import Container from "../Container";

const stats = [
  { id: 1, name: 'Data Science', value: 'Mentored by top industry experts' },
  { id: 2, name: 'Data Analytics', value: 'Mentored by top industry experts' },
  { id: 3, name: 'Software Development', value: 'Mentored by top industry experts' },
  { id: 4, name: 'Cloud Computing', value: 'Mentored by top industry experts' },
];

export default function WhyCV() {
  return (
    <section id="whycv">
      <Container>
        <div className="mt-8 sm:mt-12">
          <h1 className="text-4xl font-bold text-center mb-8">It's never too late to upskill</h1>
          <p className="text-center mb-12 text-lg">
            Whether you're looking to enhance your career or explore new opportunities, Coursevita offers top-notch courses that will guide you through every step of the journey. Our programs in Data Science, Data Analytics, Software Development, and Cloud Computing are taught by industry leaders who are committed to your success.
          </p>
          <div>
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
              <dl className="grid grid-cols-1 gap-8 sm:gap-16 lg:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.id} className="text-center bg-[#410F11] px-12 py-12 rounded-md">
                    <dt className="text-lg leading-6 font-medium text-white">{stat.name}</dt>
                    <dd className="mt-2 text-xl font-semibold text-white">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}