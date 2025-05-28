import CollapsibleSection from './CollapsibleSection';
const faqs = [
    {
        question: "How do I increase my typing speed? ",
        answer: "There are two ways to type faster: The best way to increase typing speed is to learn to type the correct way. “Touch typing” means you are able to type with all 10 fingers instead of using a “hunt and peck” method of typing. You can learn how to touch type with Typing.com’s free typing lessons. The second way you can learn to type faster is by playing typing games. Keyboard games like Nitro Type can help you practice your typing speed and increase your words per minute score. "
    },
    {
        question: "How fast should I type? ",
        answer: `The ideal typing speeds by age are as follows:
            Elementary school(Grades 3–5): 8–15 WPM
            Middle school(Grades 6–8): 12–25 WPM
            High school(Grades 9–12): 20–35 WPM
            College/ Adult: 50 WPM`
    },
    {
        question: "How is typing speed measured?",
        answer: "Typing speed is measured by the number of words you can type correctly in a set amount of time. A “word” is equivalent to five keystrokes. During a test, both speed and accuracy are measured. You will receive a number that indicates your average words per minute (WPM) and a percentage that indicates your accuracy. When you complete a 1-minute, 3-minute, or 5-minute timed typing test, you will be able to print out a certificate. "
    },
    {
        question: "Why is it important to take a typing speed test?",
        answer: "Taking a typing speed test establishes your average typing speed (WPM) and accuracy, which is an important baseline to know so you can increase speed and improve accuracy with practice. Periodically taking typing speed tests can help you track your progress and measure improvement. You even can use your WPM score from the typing test on your resume to highlight your administrative skills and attach your typing certificate as proof of your abilities! "
    },
];
const FaqSection = () => {

    return (
        <div className="mx-auto mt-10">
            <h2 className="text-5xl font-bold mb-6">FAQ's</h2>
            <CollapsibleSection collapsibleList={faqs} />
        </div>
    )
}

export default FaqSection