import CardContainer from "@/components/CardContainer";

export const blog = [
  {
    id: 1,
    title: "Top 10 Tips for Winning Scholarships",
    author: "Jane Doe",
    date: "2024-05-01",
    content:
      "Applying for scholarships can be a daunting task, but with the right approach, you can increase your chances of success. Here are our top 10 tips for winning scholarships: 1. Start early. 2. Research thoroughly. 3. Tailor your application. 4. Highlight your achievements. 5. Write a strong personal statement. 6. Get great letters of recommendation. 7. Follow instructions carefully. 8. Proofread your application. 9. Submit before the deadline. 10. Apply to as many scholarships as possible.",
    tags: ["scholarships", "tips", "education"],
  },
  {
    id: 2,
    title: "How to Write a Compelling Personal Statement",
    author: "John Smith",
    date: "2024-05-10",
    content:
      "A personal statement is your chance to make a strong impression on the scholarship committee. Here are some tips to help you write a compelling personal statement: 1. Be yourself. 2. Share your unique story. 3. Focus on your strengths. 4. Explain your goals. 5. Show your passion. 6. Keep it concise. 7. Avoid clichés. 8. Edit and revise. Remember, your personal statement should reflect who you are and why you deserve the scholarship.",
    tags: ["personal statement", "scholarships", "writing tips"],
  },
  {
    id: 3,
    title: "The Importance of Community Service in Scholarship Applications",
    author: "Alice Johnson",
    date: "2024-05-15",
    content:
      "Community service can play a significant role in your scholarship application. It demonstrates your commitment to helping others and your leadership skills. Here are some reasons why community service is important: 1. Shows your dedication to making a difference. 2. Highlights your leadership abilities. 3. Provides valuable experience. 4. Enhances your resume. 5. Can lead to great recommendation letters. If you haven't already, consider getting involved in community service activities to strengthen your scholarship applications.",
    tags: ["community service", "scholarships", "volunteering"],
  },
  {
    id: 4,
    title: "Navigating the Financial Aid Process",
    author: "Michael Lee",
    date: "2024-05-20",
    content:
      "The financial aid process can be complex and overwhelming. Here are some steps to help you navigate it: 1. Fill out the FAFSA form. 2. Understand the types of financial aid available. 3. Research scholarships and grants. 4. Meet with a financial aid advisor. 5. Keep track of deadlines. 6. Review your financial aid award letter carefully. 7. Explore work-study options. 8. Consider student loans as a last resort. By following these steps, you can make the financial aid process more manageable.",
    tags: ["financial aid", "scholarships", "education"],
  },
  {
    id: 5,
    title: "Interview Tips for Scholarship Applicants",
    author: "Emily Davis",
    date: "2024-05-25",
    content:
      "Many scholarships require an interview as part of the selection process. Here are some tips to help you ace your scholarship interview: 1. Research the scholarship organization. 2. Practice common interview questions. 3. Dress professionally. 4. Arrive early. 5. Bring necessary documents. 6. Be confident and articulate. 7. Show enthusiasm. 8. Follow up with a thank-you note. Remember, the interview is your chance to make a personal connection with the selection committee and highlight why you deserve the scholarship.",
    tags: ["interview tips", "scholarships", "applicants"],
  },
];

const page = () => {
  return (
    <CardContainer title="Blog">
      {blog.map((post, i) => (
        <div key={i} className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{post.title}</h2>
            <div className="badge badge-outline">{post.author}</div>
            <div className="badge badge-outline">{post.date}</div>
            <p>{post.content}</p>
            <div className="card-actions justify-end">
              {post.tags.map((tag, i) => (
                <div key={i} className="badge badge-secondary">
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </CardContainer>
  );
};

export default page;
