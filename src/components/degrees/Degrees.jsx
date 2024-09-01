import Degree from "./Degree";
import LearnMore from "./LearnMore";

function Degrees() {
  return (
      <div className='portfolio text-white py-8 text-center'>
          <h2 className='text-3xl'>Our Programs</h2>
          <div className='grid grid-cols-3 mt-5 gap-10'>
              <Degree degreeName='Pre-Law'>
                  <p className="mt-5">
                    Golden Oak's Pre-Law program aims to equip you with the knowledge and tools to excel in our university's legal programs, and to provide a solid foundation of legal knowledge on which you can build your entire legal career. This may build upon your work experience, but this is not a requirement.
                  </p>
                  <LearnMore>
                    <div>
                        <h2 className="text-xl mt-3">Pre-Law Program Info</h2>
                        <p className="mt-3">Golden Oak's Pre-Law program aims to equip you with the knowledge and tools to excel in our university's legal programs, and to provide a solid foundation of legal knowledge on which you can build your entire legal career. This may build upon your work experience, but this is not a requirement.</p>
                        <p className="mt-3">
                            By the end of this program, you should:
                            <ul className="list-disc ml-10">
                                <li>Be able to pass the Solicitor Exam.</li>
                                <li>Be able to be employed as a Paralegal, Intern, or similar position in a law firm or similar entity.</li>
                                <li>Begin developing the skill set required to excel in the legal field in Redmont.</li>
                            </ul>
                        </p>
                        <p className="mt-3">
                            Prerequisites for this program include:
                            <ul className="list-disc ml-10">
                                <li>Satisfactory completion of pre-acceptance questionnaire (will be provided in Discord).</li>
                            </ul>
                        </p>
                        <p className="mt-3">
                            Tuition for this Program is $500 per credit. This Program is a 12-credit program for an Associate of Law (A.L.) Degree.
                            <div className="text-center">
                                <img src='./ExampleAL.png' width={'320px'} alt='Associate of Law Degree Example Image' className="inline-block mt-5" />
                            </div>
                        </p>
                    </div>
                  </LearnMore>
              </Degree>
              <Degree degreeName='Intermediate Law'>
                  <p className="mt-5">
                    Coming Soon...
                  </p>
              </Degree>
              <Degree degreeName='Advanced Law'>
                  <p className="mt-5">Coming Soon(ish)...</p>
              </Degree>
          </div>
          <div className="text-center mt-10">
            <h1 className="text-3xl">Apply at Golden Oak University</h1>
            <p className="mt-3">You can apply by making a ticket in Discord: <a className="underline text-blue-400" href="https://discord.gg/hP2qfvv8NC">https://discord.gg/hP2qfvv8NC</a></p>
          </div>
      </div>
  );
}

export default Degrees;