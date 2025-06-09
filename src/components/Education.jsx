import universityeducation from "/universityLogo.png";
import fellowshipEducation from "/logo_andela.svg";

const Education = () => {
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold mb-8">Education</h2>
      <div className="flex items-center gap-5">
        <img
          src={universityeducation}
          alt="USIU-A Logo"
          className="w-14 h-10 border rounded-2xl"
        />
        <div className="flex items-center justify-between space-x-10 flex-1">
          <div className="flex flex-col">
            <h3 className="font-semibold">
              <a
                className="hover:text-blue-900 "
                href="https://www.usiu.ac.ke/"
              >
                United States International University-Africa
              </a>
            </h3>
            <span className="font-medium text-gray-500 text-sm">
              BSc. Information System and Technology
            </span>
            <span className="font-medium text-gray-500 text-sm">
              Applications Development Major
            </span>
          </div>
          <div className="text-gray-400 mb-10">
            September 2011 - August 2015
          </div>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <img
          src={fellowshipEducation}
          alt="Andela Fellowship Logo"
          className="w-14 h-10 border rounded-2xl"
        />
        <div className="flex items-center justify-between space-x-10 flex-1">
          <div className="flex flex-col">
            <h3 className="font-semibold">Andela Fellowship</h3>
            <span className="font-medium text-gray-500 text-sm">
              Full Stack Development Training
            </span>
          </div>
          <div className="text-gray-400">June 2018 - June 2021</div>
        </div>
      </div>
    </div>
  );
};

export default Education;
