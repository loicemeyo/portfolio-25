import microsoftExperience from "/microsoftLogo.png";
import safaricomExperience from "/safaricomLogo.png";
import starcityExperience from "/starcityLogo.png";
import andelaExperience from "/andelaLogo.png";

const Experience = () => {
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold mb-8"> Work Experience</h2>
      <div className="flex items-center gap-5">
        <img
          src={microsoftExperience}
          alt="Microsoft Experience Logo"
          className="w-14 border rounded-2xl"
        />
        <div className="flex items-center justify-between gap-x-8 flex-1">
          <div className="flex flex-col">
            <h3 className="font-semibold">Microsoft</h3>
            <span className="font-medium text-gray-500 text-sm">
              Software Engineer
            </span>
          </div>
          <div className="text-gray-400">July 2021 - December 2024</div>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <img
          src={safaricomExperience}
          alt="Safaricom Experience Logo"
          className="w-14 border rounded-2xl"
        />
        <div className="flex items-center justify-between gap-x-8 flex-1">
          <div className="flex flex-col">
            <h3 className="font-semibold">Safaricom</h3>
            <span className="font-medium text-gray-500 text-sm">
              Mobile Applications Engineer
            </span>
          </div>
          <div className="text-gray-400">July 2021 - December 2024</div>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <img
          src={starcityExperience}
          alt="Starcity Experience Logo"
          className="w-14 border rounded-2xl"
        />
        <div className="flex items-center justify-between gap-x-8 flex-1">
          <div className="flex flex-col">
            <h3 className="font-semibold">Starcity</h3>
            <span className="font-medium text-gray-500 text-sm">
              React-Native Engineer
            </span>
          </div>
          <div className="text-gray-400">July 2021 - December 2024</div>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <img
          src={andelaExperience}
          alt="Andela Experience Logo"
          className="w-14 border rounded-2xl"
        />
        <div className="flex items-center justify-between gap-x-8 flex-1">
          <div className="flex flex-col">
            <h3 className="font-semibold">Andela</h3>
            <span className="font-medium text-gray-500 text-sm">
              Full Stack Software Engineer
            </span>
          </div>
          <div className="text-gray-400">July 2021 - December 2024</div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
