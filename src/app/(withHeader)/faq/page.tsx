"use client"
import Image from "next/image"
import addLogo from "/public/Plus.png"
import { useEffect, useState } from "react";

interface FAQ {
  _id: number;
  question: string;
  answer: string;
}

export default function Faq() {

  const [newQuestion, setNewQuestion] = useState<string>('');
  const [newAnswer, setNewAnswer] = useState<string>('');
  const [isVisible, setIsvisible] = useState<boolean>(false);
  const [faqVisible, setFaqVisible] = useState<{ [key: number]: boolean }>({});
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [editingFAQ, setEditingFAQ] = useState<FAQ | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await fetch('/api/faq');
        const data = await response.json();
        setFaqs(data);
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFAQs(); // Call the function inside useEffect
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const faqData = { question, answer };

    try {
      const method = editingFAQ ? 'PUT' : 'POST';
      const url = editingFAQ ? `/api/faq` : '/api/faq'; // Use the same endpoint

      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(faqData),
      });

      if (response.ok) {
        setQuestion('');
        setAnswer('');
        setEditingFAQ(null);
        // Reload the FAQ list after adding or updating
        const faqResponse = await fetch('/api/faq');
        const data = await faqResponse.json();
        setFaqs(data);
        alert(editingFAQ ? 'FAQ updated successfully' : 'FAQ added successfully');
      } else {
        alert('Failed to save FAQ');
      }
    } catch (error) {
      console.error("Error saving FAQ:", error);
      alert('Error saving FAQ');
    }
  };


  if (loading) {
    return <div>Loading FAQs...</div>;
  }
  const handleVisibility = () => {
    setIsvisible(isVisible => !isVisible);
  }

  const handleFaqVisible = (_id: number) => {
    setFaqVisible((prev) => ({ ...prev, [_id]: !prev[_id] }));
  }
  const clearReviews = () => {
    setNewQuestion("");
    setNewAnswer("");
  };
  return (
    <div className="flex flex-col items-center w-full pb-20 pt-5 md:pb-10 xl:py-20 lg:py-10">
      <div className="  h-full md:h-full md:pt-[20px] lg:w-[900px] xl:w-[1321px] w-full md:w-[650px] bg-white items-center flex flex-col justify-center lg:gap-[70px] gap-[36px] md:gap-[63px]">

        <div className="flex flex-col justify-center items-center lg:gap-[15px] gap-[8px] md:gap-[12px]">
          <h1 className="lg:text-[36px] text-[26px] md:text-[30px] text-black font-bold">Questions Looks Here</h1>
          <p className="lg:text-[16px] text-[12px] md:text-[14px] text-color15 lg:leading-[24px] leading-[15px] md:leading-[20px] text-center lg:w-[644px] lg:h-[48px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
        </div>

        {/* FAQ List Section */}
        <div className="xl:h-[558px] xl:w-[1320px] w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-[16px] gap-[12px] place-items-center">
          {faqs.map((item:any) => (
            <div className="lg:w-[400px] xl:w-[648px] h-full py-3 md:w-[550px] w-[85%] bg-color19 flex flex-col justify-center items-center xl:rounded-[8px] xl:gap-[24px] xl:px-[15px] gap-[18px] md:gap-[20px] lg:gap-[3px]">
              <div className="flex justify-between  items-center xl:w-[600px] md:w-[550px] lg:w-[350px] w-[98%] px-1.5">
                <div className="font-semibold text-black lg:text-[18px] text-[14px] md:text-[16px]">{item.question}</div>
                <button onClick={() => handleFaqVisible(item._id)}>{faqVisible[item._id] ?
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>

                  </div> :
                  <div><Image className="h-[14px] w-[14px]" src={addLogo} alt="add icon"></Image></div>
                }</button>

              </div>
              <div>
                {faqVisible[item._id] ?
                  <div className="xl:text-[16px] text-[12px] md:text-[14px] xl:leading-[24px] text-color20">{item.answer && "Your query is in line, we'll respond soon!"}</div> :
                  ""}
              </div>
            </div>
          ))}
        </div>
        <button onClick={handleVisibility}>
          {!isVisible ?
            <div className="flex justify-center w-full">
              <div className="bg-color5 text-white py-2 rounded-[2px] h-[32px] w-[110px] flex items-center justify-center text-[15px] mt-4 hover:bg-color6 cursor-pointer">
                Add FAQ
              </div>
            </div>
            :
            ""}
        </button>

        {/* Add FAQ Form Section */}
        {!isVisible ?
          "" :
          <div>
            <form onSubmit={handleSubmit}>
              <div className="lg:col-span-2 bg-[#F8F8FD] w-[260px] md:w-[400px] lg:w-[500px] py-3 md:py-5">
                <div className="space-y-6 flex flex-col items-start">
                  <div className="flex flex-col items-center w-full">
                    <h3 className="text-lg font-semibold mb-6">Add FAQ</h3>
                  </div>

                  {/* Question Input */}
                  <div className="space-y-2 flex flex-col items-start ml-5 md:ml-10 lg:ml-14">
                    <label className="block text-[15px] mb-2" htmlFor="question">
                      Question
                    </label>
                    <input
                      type="text"
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      required
                      className="border-2  focus:outline-none rounded p-2 w-[210px] md:w-[300px] lg:w-[370px] text-[13px] bg-transparent border-transparent placeholder:text-[#C1C8E1] border-b-[#BFC6E0]"
                      placeholder="Enter your question here"
                    />
                    <div className="text-red-500 text-[10px] md:text-[11px] lg:text-[12px] xl:text-[14px]" />
                  </div>


                  {/* Submit Button */}
                  <div className="flex justify-center gap-2 w-full">
                    <button onClick={() => {handleVisibility() ; clearReviews()}} className="bg-gray-200 hover:bg-gray-300 text-white py-2 rounded-[2px] h-[32px] w-[110px] flex items-center justify-center text-[15px] mt-4 cursor-pointer">
                      Cancel
                    </button>
                    <button type="submit" className="bg-color5 text-white py-2 rounded-[2px] h-[32px] w-[110px] flex items-center justify-center text-[15px] mt-4 hover:bg-color6 cursor-pointer">
                    {editingFAQ ? 'Update FAQ' : 'Add FAQ'}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        }


      </div>
    </div>

  );
}
