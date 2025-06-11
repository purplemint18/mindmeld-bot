const questionBank = [
  {
    id: "q1",
    question: "At a party do you:",
    options: [
      {
        text: "Interact with many, including strangers",
        dimension: "IE",
        direction: "E",
      },
      {
        text: "Interact with a few, known to you",
        dimension: "IE",
        direction: "I",
      },
    ],
  },
  {
    id: "q2",
    question: "At parties do you:",
    options: [
      {
        text: "Stay late, with increasing energy",
        dimension: "IE",
        direction: "E",
      },
      {
        text: "Leave early with decreased energy",
        dimension: "IE",
        direction: "I",
      },
    ],
  },
  {
    id: "q3",
    question: "In your social groups do you:",
    options: [
      {
        text: "Stay updated on what others are doing?",
        dimension: "IE",
        direction: "E",
      },
      { text: "Fall behind on the news about others?", dimension: "IE", direction: "I" },
    ],
  },
  {
    id: "q4",
    question: "When you are with others, do you:",
    options: [
      { text: "Start conversations on your own?", dimension: "IE", direction: "E" },
      { text: "Prefer to wait for someone else to talk to you?", dimension: "IE", direction: "I" },
    ],
  },
  {
    id: "q5",
    question: "How do you feel about new and unfamiliar interactions with others?",
    options: [
      { text: "Do they excite and energize you?", dimension: "IE", direction: "E" },
      { text: "Do they drain your energy and make you feel tired?", dimension: "IE", direction: "I" },
    ],
  },
  {
    id: "q6",
    question: "What type of friendships do you prefer?",
    options: [
      {
        text: "Having many friends with short interactions?",
        dimension: "IE",
        direction: "E",
      },
      {
        text: "Having a few close friends with deeper, longer conversations?",
        dimension: "IE",
        direction: "I",
      },
    ],
  },
  {
    id: "q7",
    question: "Do you:",
    options: [
      {
        text: "Speak easily and at length with strangers",
        dimension: "IE",
        direction: "E",
      },
      {
        text: "Find little to say to strangers",
        dimension: "IE",
        direction: "I",
      },
    ],
  },
  {
    id: "q8",
    question: "In a social gathering, do you prefer to:",
    options: [
      {
        text: "Move around and talk to different people",
        dimension: "IE",
        direction: "E",
      },
      {
        text: "Stay with one or two people you already know",
        dimension: "IE",
        direction: "I",
      },
    ],
  },
  {
    id: "q9",
    question: "When the phone rings do you:",
    options: [
      { text: "Hasten to get to it first", dimension: "IE", direction: "E" },
      {
        text: "Hope someone else will answer",
        dimension: "IE",
        direction: "I",
      },
    ],
  },
  {
    id: "q10",
    question: "How would you describe your demeanor towards others?",
    options: [
      { text: "Are you friendly and easy for others to talk to?", dimension: "IE", direction: "E" },
      { text: "Do you tend to be more reserved and less open?", dimension: "IE", direction: "I" },
    ],
  },
  {
    id: "q11",
    question: "After spending time with a group, do you feel:",
    options: [
      { text: "Energized and ready for more", dimension: "IE", direction: "E" },
      {
        text: "In need of alone time to recharge",
        dimension: "IE",
        direction: "I",
      },
    ],
  },
  {
    id: "q12",
    question: "When working on projects, do you prefer:",
    options: [
      { text: "Collaborating with a team", dimension: "IE", direction: "E" },
      { text: "Working independently", dimension: "IE", direction: "I" },
    ],
  },
  {
    id: "q13",
    question: "Do you tend to:",
    options: [
      {
        text: "Think out loud and discuss ideas",
        dimension: "IE",
        direction: "E",
      },
      {
        text: "Process thoughts internally before sharing",
        dimension: "IE",
        direction: "I",
      },
    ],
  },
  {
    id: "q14",
    question: "In social situations, are you more likely to:",
    options: [
      { text: "Be the center of attention", dimension: "IE", direction: "E" },
      { text: "Observe from the sidelines", dimension: "IE", direction: "I" },
    ],
  },
  {
    id: "q15",
    question: "Do you find it:",
    options: [
      {
        text: "Easy to introduce yourself to new people",
        dimension: "IE",
        direction: "E",
      },
      {
        text: "Challenging to make the first move socially",
        dimension: "IE",
        direction: "I",
      },
    ],
  },
  {
    id: "q16",
    question: "Your ideal weekend would include:",
    options: [
      {
        text: "Social events and activities with others",
        dimension: "IE",
        direction: "E",
      },
      {
        text: "Quiet time with a book or hobby",
        dimension: "IE",
        direction: "I",
      },
    ],
  },
  {
    id: "q17",
    question: "When solving problems, do you prefer to:",
    options: [
      { text: "Discuss options with others", dimension: "IE", direction: "E" },
      {
        text: "Think through solutions on your own",
        dimension: "IE",
        direction: "I",
      },
    ],
  },
  {
    id: "q18",
    question: "Do you consider yourself:",
    options: [
      {
        text: "An open book that shares freely",
        dimension: "IE",
        direction: "E",
      },
      {
        text: "A private person who reveals selectively",
        dimension: "IE",
        direction: "I",
      },
    ],
  },
  {
    id: "q19",
    question: "In meetings, do you:",
    options: [
      {
        text: "Contribute frequently to the discussion",
        dimension: "IE",
        direction: "E",
      },
      { text: "Listen more than you speak", dimension: "IE", direction: "I" },
    ],
  },
  {
    id: "q20",
    question: "When learning something new, do you prefer:",
    options: [
      {
        text: "Group workshops and discussions",
        dimension: "IE",
        direction: "E",
      },
      {
        text: "Self-study and individual practice",
        dimension: "IE",
        direction: "I",
      },
    ],
  },
  {
    id: "q21",
    question: "Do you find small talk:",
    options: [
      { text: "Enjoyable and energizing", dimension: "IE", direction: "E" },
      { text: "Draining or uncomfortable", dimension: "IE", direction: "I" },
    ],
  },
  {
    id: "q22",
    question: "When faced with a challenge, do you first:",
    options: [
      {
        text: "Reach out to others for input",
        dimension: "IE",
        direction: "E",
      },
      { text: "Reflect on it privately", dimension: "IE", direction: "I" },
    ],
  },
  {
    id: "q23",
    question: "Do you prefer environments that are:",
    options: [
      { text: "Lively and stimulating", dimension: "IE", direction: "E" },
      { text: "Calm and low-key", dimension: "IE", direction: "I" },
    ],
  },
  {
    id: "q24",
    question: "Are your hobbies typically:",
    options: [
      { text: "Social and interactive", dimension: "IE", direction: "E" },
      { text: "Solitary and self-directed", dimension: "IE", direction: "I" },
    ],
  },
  {
    id: "q25",
    question: "After a difficult day, would you rather:",
    options: [
      { text: "Talk it through with someone", dimension: "IE", direction: "E" },
      { text: "Process it alone", dimension: "IE", direction: "I" },
    ],
  },
  {
    id: "q26",
    question: "Do you typically:",
    options: [
      {
        text: "Express thoughts and feelings readily",
        dimension: "IE",
        direction: "E",
      },
      {
        text: "Keep thoughts and feelings to yourself",
        dimension: "IE",
        direction: "I",
      },
    ],
  },
  {
    id: "q27",
    question: "In your free time, do you prefer:",
    options: [
      { text: "Being around people", dimension: "IE", direction: "E" },
      { text: "Having time to yourself", dimension: "IE", direction: "I" },
    ],
  },
  {
    id: "q28",
    question: "Do you find it easier to:",
    options: [
      {
        text: "Talk to many people at a gathering",
        dimension: "IE",
        direction: "E",
      },
      {
        text: "Have deep conversations with one person",
        dimension: "IE",
        direction: "I",
      },
    ],
  },
  {
    id: "q29",
    question: "When making decisions, do you:",
    options: [
      {
        text: "Consult with others for their perspectives",
        dimension: "IE",
        direction: "E",
      },
      {
        text: "Rely primarily on your own judgment",
        dimension: "IE",
        direction: "I",
      },
    ],
  },
  {
    id: "q30",
    question: "Do you prefer working in:",
    options: [
      {
        text: "An open, collaborative environment",
        dimension: "IE",
        direction: "E",
      },
      { text: "A quiet, private space", dimension: "IE", direction: "I" },
    ],
  },

  // SN Dimension (30 questions)
  {
    id: "q31",
    question: "Do you consider yourself more:",
    options: [
      { text: "Realistic and practical", dimension: "SN", direction: "S" },
      { text: "Imaginative and theoretical", dimension: "SN", direction: "N" },
    ],
  },
  {
    id: "q32",
    question: "Which do you think is worse:",
    options: [
      {
        text: "Being impractical and unrealistic",
        dimension: "SN",
        direction: "S",
      },
      { text: "Being stuck in routine and predictability", dimension: "SN", direction: "N" },
    ],
  },
  {
    id: "q33",
    question: "You tend to be drawn to people who are:",
    options: [
      { text: "Practical and down-to-earth", dimension: "SN", direction: "S" },
      { text: "Creative and full of ideas", dimension: "SN", direction: "N" },
    ],
  },
  {
    id: "q34",
    question: "Which interests you more:",
    options: [
      { text: "What exists in reality right now", dimension: "SN", direction: "S" },
      { text: "What could potentially exist in the future", dimension: "SN", direction: "N" },
    ],
  },
  {
    id: "q35",
    question: "When performing routine tasks, do you prefer to:",
    options: [
      { text: "Follow established methods that work", dimension: "SN", direction: "S" },
      { text: "Find new and different approaches", dimension: "SN", direction: "N" },
    ],
  },
  {
    id: "q36",
    question: "In your opinion, good writers should:",
    options: [
      {
        text: "Be clear, direct, and straightforward",
        dimension: "SN",
        direction: "S",
      },
      {
        text: "Use metaphors and creative expressions",
        dimension: "SN",
        direction: "N",
      },
    ],
  },
  {
    id: "q37",
    question: "Before making a phone call, do you:",
    options: [
      {
        text: "Just dial and speak naturally as the conversation flows",
        dimension: "SN",
        direction: "S",
      },
      { text: "Plan out what you're going to say", dimension: "SN", direction: "N" },
    ],
  },
  {
    id: "q38",
    question: "How do you typically interpret facts and information?",
    options: [
      { text: "Take them at face value", dimension: "SN", direction: "S" },
      {
        text: "Look for patterns and deeper meanings",
        dimension: "SN",
        direction: "N",
      },
    ],
  },
  {
    id: "q39",
    question: "People with grand visions for the future are:",
    options: [
      { text: "Often impractical and unrealistic", dimension: "SN", direction: "S" },
      { text: "Inspiring and thought-provoking", dimension: "SN", direction: "N" },
    ],
  },
  {
    id: "q40",
    question: "How do you view conventional wisdom and common sense?",
    options: [
      { text: "Usually reliable and trustworthy", dimension: "SN", direction: "S" },
      { text: "Often worth challenging or questioning", dimension: "SN", direction: "N" },
    ],
  },
  {
    id: "q41",
    question: "What do you think children should do more of?",
    options: [
      {
        text: "Learn practical skills and responsibilities",
        dimension: "SN",
        direction: "S",
      },
      {
        text: "Use their imagination and creativity",
        dimension: "SN",
        direction: "N",
      },
    ],
  },
  {
    id: "q42",
    question: "Which do you consider more valuable?",
    options: [
      { text: "Specific facts and tangible details", dimension: "SN", direction: "S" },
      { text: "Concepts and theoretical frameworks", dimension: "SN", direction: "N" },
    ],
  },
  {
    id: "q43",
    question: "How would you describe yourself most of the time?",
    options: [
      { text: "Practical and grounded", dimension: "SN", direction: "S" },
      { text: "Imaginative and idea-oriented", dimension: "SN", direction: "N" },
    ],
  },
  {
    id: "q44",
    question: "When making decisions, do you rely more on:",
    options: [
      { text: "Concrete evidence and data", dimension: "SN", direction: "S" },
      { text: "Theories and conceptual understanding", dimension: "SN", direction: "N" },
    ],
  },
  {
    id: "q45",
    question: "Which aspects of a project interest you more?",
    options: [
      { text: "Implementation and practical application", dimension: "SN", direction: "S" },
      { text: "Innovation and conceptual development", dimension: "SN", direction: "N" },
    ],
  },
  {
    id: "q46",
    question: "When solving problems, do you tend to trust your:",
    options: [
      { text: "Past experiences and proven methods", dimension: "SN", direction: "S" },
      { text: "Intuition and gut feelings", dimension: "SN", direction: "N" },
    ],
  },
  {
    id: "q47",
    question: "How would you describe yourself?",
    options: [
      {
        text: "I prefer practical solutions and realistic approaches",
        dimension: "SN",
        direction: "S",
      },
      {
        text: "I prefer creative ideas and innovative approaches",
        dimension: "SN",
        direction: "N",
      },
    ],
  },
  {
    id: "q48",
    question: "Which quality do you value more in yourself?",
    options: [
      { text: "Being grounded and realistic", dimension: "SN", direction: "S" },
      { text: "Having a vivid imagination", dimension: "SN", direction: "N" },
    ],
  },
  {
    id: "q49",
    question: "When studying a topic, are you more interested in:",
    options: [
      { text: "The core facts and essential details", dimension: "SN", direction: "S" },
      { text: "The nuances and implied meanings", dimension: "SN", direction: "N" },
    ],
  },
  {
    id: "q50",
    question: "In reading, do you prefer content that is:",
    options: [
      { text: "Straightforward and explicit", dimension: "SN", direction: "S" },
      { text: "Metaphorical and open to interpretation", dimension: "SN", direction: "N" },
    ],
  },
  {
    id: "q51",
    question: "When making plans, what do you focus on?",
    options: [
      {
        text: "Specific details and practical considerations",
        dimension: "SN",
        direction: "S",
      },
      {
        text: "Overall vision and potential outcomes",
        dimension: "SN",
        direction: "N",
      },
    ],
  },
  {
    id: "q52",
    question: "Which type of instructions do you prefer to follow?",
    options: [
      { text: "Clear, step-by-step directions", dimension: "SN", direction: "S" },
      { text: "Broad guidelines with room for interpretation", dimension: "SN", direction: "N" },
    ],
  },
  {
    id: "q53",
    question: "Which captures your attention more?",
    options: [
      { text: "Current realities and concrete events", dimension: "SN", direction: "S" },
      {
        text: "Future possibilities and potential developments",
        dimension: "SN",
        direction: "N",
      },
    ],
  },
  {
    id: "q54",
    question: "When analyzing a situation, do you typically:",
    options: [
      { text: "Focus on the facts as they are", dimension: "SN", direction: "S" },
      {
        text: "Consider various possible interpretations",
        dimension: "SN",
        direction: "N",
      },
    ],
  },
  {
    id: "q55",
    question: "When telling a story about an event, do you emphasize:",
    options: [
      {
        text: "Exactly what happened, in what order",
        dimension: "SN",
        direction: "S",
      },
      { text: "The significance and what it meant to you", dimension: "SN", direction: "N" },
    ],
  },
  {
    id: "q56",
    question: "Which type of work environment do you prefer?",
    options: [
      {
        text: "Structured, with clear guidelines and expectations",
        dimension: "SN",
        direction: "S",
      },
      {
        text: "Flexible, encouraging creativity and new ideas",
        dimension: "SN",
        direction: "N",
      },
    ],
  },
  {
    id: "q57",
    question: "When approaching tasks, are you more comfortable:",
    options: [
      {
        text: "Using proven methods that have worked before",
        dimension: "SN",
        direction: "S",
      },
      { text: "Trying new approaches and experimenting", dimension: "SN", direction: "N" },
    ],
  },
  {
    id: "q58",
    question: "Which do you consider more important?",
    options: [
      {
        text: "Practical skills and real-world knowledge",
        dimension: "SN",
        direction: "S",
      },
      {
        text: "Creative thinking and theoretical insights",
        dimension: "SN",
        direction: "N",
      },
    ],
  },
  {
    id: "q59",
    question: "What kind of books or articles do you prefer to read?",
    options: [
      {
        text: "Clear, factual, and to the point",
        dimension: "SN",
        direction: "S",
      },
      {
        text: "Rich with symbolism and multiple layers of meaning",
        dimension: "SN",
        direction: "N",
      },
    ],
  },
  {
    id: "q60",
    question: "Where does your mind naturally tend to focus?",
    options: [
      {
        text: "On present realities and immediate concerns",
        dimension: "SN",
        direction: "S",
      },
      {
        text: "On future possibilities and what could be",
        dimension: "SN",
        direction: "N",
      },
    ],
  },

  // TF Dimension (30 questions)
  {
    id: "q61",
    question: "What impresses you more?",
    options: [
      { text: "Logical principles and rules", dimension: "TF", direction: "T" },
      { text: "Emotional connections and feelings", dimension: "TF", direction: "F" },
    ],
  },
  {
    id: "q62",
    question: "Which type of content do you find more appealing?",
    options: [
      { text: "Content with convincing arguments", dimension: "TF", direction: "T" },
      { text: "Content that emotionally moves you", dimension: "TF", direction: "F" },
    ],
  },
  {
    id: "q63",
    question: "When evaluating other people's actions, what matters more?",
    options: [
      { text: "Following rules regardless of circumstances", dimension: "TF", direction: "T" },
      { text: "Considering unique circumstances over rigid rules", dimension: "TF", direction: "F" },
    ],
  },
  {
    id: "q64",
    question: "How do you typically approach interactions with others?",
    options: [
      { text: "With objectivity and professional distance", dimension: "TF", direction: "T" },
      { text: "With personal warmth and connection", dimension: "TF", direction: "F" },
    ],
  },
  {
    id: "q65",
    question: "Which do you value more in life?",
    options: [
      { text: "Logical consistency in your thinking", dimension: "TF", direction: "T" },
      { text: "Maintaining harmonious relationships with others", dimension: "TF", direction: "F" },
    ],
  },
  {
    id: "q66",
    question: "Which type of decision-making feels more natural to you?",
    options: [
      { text: "Making decisions based on logic and analysis", dimension: "TF", direction: "T" },
      { text: "Making decisions based on personal values and feelings", dimension: "TF", direction: "F" },
    ],
  },
  {
    id: "q67",
    question: "How would you describe your general demeanor?",
    options: [
      { text: "Serious, focused, and determined", dimension: "TF", direction: "T" },
      { text: "Relaxed, flexible, and accommodating", dimension: "TF", direction: "F" },
    ],
  },
  {
    id: "q68",
    question: "How do others typically perceive you?",
    options: [
      { text: "As level-headed and rational", dimension: "TF", direction: "T" },
      { text: "As warm-hearted and empathetic", dimension: "TF", direction: "F" },
    ],
  },
  {
    id: "q69",
    question: "Which do you consider a worse character flaw?",
    options: [
      { text: "Being unfair or unjust to others", dimension: "TF", direction: "T" },
      { text: "Being harsh or merciless toward others", dimension: "TF", direction: "F" },
    ],
  },
  {
    id: "q70",
    question: "When making important decisions, what do you rely on more?",
    options: [
      { text: "Objective standards and criteria", dimension: "TF", direction: "T" },
      { text: "Personal feelings and emotional responses", dimension: "TF", direction: "F" },
    ],
  },
  {
    id: "q71",
    question: "Which better describes your approach to situations?",
    options: [
      { text: "More firm than gentle", dimension: "TF", direction: "T" },
      { text: "More gentle than firm", dimension: "TF", direction: "F" },
    ],
  },
  {
    id: "q72",
    question: "When interacting with others, do you tend to:",
    options: [
      { text: "Focus on how they can contribute or be useful", dimension: "TF", direction: "T" },
      { text: "Focus on understanding their perspective", dimension: "TF", direction: "F" },
    ],
  },
  {
    id: "q73",
    question: "Which outcome do you find more satisfying in a discussion?",
    options: [
      { text: "Thoroughly examining all aspects of an issue", dimension: "TF", direction: "T" },
      { text: "Reaching a consensus that everyone feels good about", dimension: "TF", direction: "F" },
    ],
  },
  {
    id: "q74",
    question: "What guides your decisions more often?",
    options: [
      { text: "Logical thinking and rational analysis", dimension: "TF", direction: "T" },
      { text: "Emotional responses and personal values", dimension: "TF", direction: "F" },
    ],
  },
  {
    id: "q75",
    question: "Which would you consider more complimentary?",
    options: [
      { text: "Being described as a very logical person", dimension: "TF", direction: "T" },
      { text: "Being described as a very compassionate person", dimension: "TF", direction: "F" },
    ],
  },
  {
    id: "q76",
    question: "Which quality do you value more in yourself?",
    options: [
      { text: "Being consistent and unwavering in your principles", dimension: "TF", direction: "T" },
      { text: "Being devoted and loyal to people you care about", dimension: "TF", direction: "F" },
    ],
  },
  {
    id: "q77",
    question: "Which trait deserves more recognition in a person?",
    options: [
      { text: "Having clear, rational thinking", dimension: "TF", direction: "T" },
      { text: "Having deep, genuine emotions", dimension: "TF", direction: "F" },
    ],
  },
  {
    id: "q78",
    question: "How would you describe your approach to others?",
    options: [
      { text: "Fair-minded and impartial", dimension: "TF", direction: "T" },
      { text: "Sympathetic and understanding", dimension: "TF", direction: "F" },
    ],
  },
  {
    id: "q79",
    question: "Which do you consider a bigger mistake?",
    options: [
      { text: "Being too emotional when making decisions", dimension: "TF", direction: "T" },
      { text: "Being too detached when dealing with people", dimension: "TF", direction: "F" },
    ],
  },
  {
    id: "q80",
    question: "How do you fundamentally see yourself?",
    options: [
      { text: "Practical and rational in approach", dimension: "TF", direction: "T" },
      { text: "Compassionate and sensitive to others", dimension: "TF", direction: "F" },
    ],
  },
  {
    id: "q81",
    question: "Which is more challenging for you?",
    options: [
      { text: "Putting yourself in someone else's shoes", dimension: "TF", direction: "T" },
      { text: "Making practical use of people's skills", dimension: "TF", direction: "F" },
    ],
  },
  {
    id: "q82",
    question: "Which quality do you aspire to develop more?",
    options: [
      { text: "Clear, rational thinking", dimension: "TF", direction: "T" },
      { text: "Deep empathy and compassion", dimension: "TF", direction: "F" },
    ],
  },
  {
    id: "q83",
    question: "Which do you consider worse?",
    options: [
      { text: "Accepting ideas without proper evaluation", dimension: "TF", direction: "T" },
      { text: "Being overly judgmental of others", dimension: "TF", direction: "F" },
    ],
  },
  {
    id: "q84",
    question: "When giving feedback, what's your natural approach?",
    options: [
      { text: "Being straightforward and truthful", dimension: "TF", direction: "T" },
      { text: "Being considerate of the person's feelings", dimension: "TF", direction: "F" },
    ],
  },
  {
    id: "q85",
    question: "During conflicts, what's your primary focus?",
    options: [
      { text: "Finding the most logical and effective solution", dimension: "TF", direction: "T" },
      { text: "Ensuring everyone's emotional needs are addressed", dimension: "TF", direction: "F" },
    ],
  },
  {
    id: "q86",
    question: "What qualities do you prefer in a leader?",
    options: [
      { text: "Competence, fairness, and clear direction", dimension: "TF", direction: "T" },
      { text: "Empathy, understanding, and supportiveness", dimension: "TF", direction: "F" },
    ],
  },
  {
    id: "q87",
    question: "When facing a difficult decision, how do you approach it?",
    options: [
      { text: "Analyze facts and consequences objectively", dimension: "TF", direction: "T" },
      { text: "Consider how it will impact people emotionally", dimension: "TF", direction: "F" },
    ],
  },
  {
    id: "q88",
    question: "Which principle do you value more highly?",
    options: [
      { text: "Honesty, even when it might be uncomfortable", dimension: "TF", direction: "T" },
      { text: "Maintaining positive relationships with others", dimension: "TF", direction: "F" },
    ],
  },
  {
    id: "q89",
    question: "When someone comes to you with a problem, what's your first instinct?",
    options: [
      { text: "Offer practical solutions to fix the issue", dimension: "TF", direction: "T" },
      { text: "Provide emotional support and understanding", dimension: "TF", direction: "F" },
    ],
  },
  {
    id: "q90",
    question: "What's the primary basis for your important decisions?",
    options: [
      { text: "Objective facts and logical reasoning", dimension: "TF", direction: "T" },
      { text: "Personal values and impact on people", dimension: "TF", direction: "F" },
    ],
  },

  // JP Dimension (30 questions)
  {
    id: "q91",
    question: "How do you prefer to handle situations?",
    options: [
      { text: "Make decisions and finalize things", dimension: "JP", direction: "J" },
      { text: "Keep my options open for flexibility", dimension: "JP", direction: "P" },
    ],
  },
  {
    id: "q92",
    question: "Which approach do you find more comfortable?",
    options: [
      { text: "Having matters resolved and decided", dimension: "JP", direction: "J" },
      { text: "Keeping possibilities open and undecided", dimension: "JP", direction: "P" },
    ],
  },
  {
    id: "q93",
    question: "When it comes to events, do you prefer them to be:",
    options: [
      { text: "Scheduled and organized in advance", dimension: "JP", direction: "J" },
      { text: "Spontaneous and flexible", dimension: "JP", direction: "P" },
    ],
  },
  {
    id: "q94",
    question: "Which better describes your approach to life?",
    options: [
      { text: "I'm more deliberate and thoughtful than spontaneous", dimension: "JP", direction: "J" },
      { text: "I'm more spontaneous and flexible than deliberate", dimension: "JP", direction: "P" },
    ],
  },
  {
    id: "q95",
    question: "When tackling tasks, do you prefer to:",
    options: [
      { text: "Create and follow detailed lists", dimension: "JP", direction: "J" },
      { text: "Adapt your approach as you progress", dimension: "JP", direction: "P" },
    ],
  },
  {
    id: "q96",
    question: "When facing a challenge, is it better to:",
    options: [
      { text: "Have a comprehensive plan before starting", dimension: "JP", direction: "J" },
      {
        text: "Address issues as they arise without extensive planning",
        dimension: "JP",
        direction: "P",
      },
    ],
  },
  {
    id: "q97",
    question: "When working on projects, do you typically:",
    options: [
      {
        text: "Complete them well before they're due",
        dimension: "JP",
        direction: "J",
      },
      {
        text: "Finish them close to or at the deadline",
        dimension: "JP",
        direction: "P",
      },
    ],
  },
  {
    id: "q98",
    question: "In your everyday life, which do you value more?",
    options: [
      { text: "Consistency, order, and routine", dimension: "JP", direction: "J" },
      { text: "Variety, adaptability, and spontaneity", dimension: "JP", direction: "P" },
    ],
  },
  {
    id: "q99",
    question: "Which gives you greater satisfaction?",
    options: [
      {
        text: "Finishing tasks and marking them as complete",
        dimension: "JP",
        direction: "J",
      },
      {
        text: "Initiating new projects and exploring new ideas",
        dimension: "JP",
        direction: "P",
      },
    ],
  },
  {
    id: "q100",
    question: "How would you describe your typical workspace?",
    options: [
      { text: "Neat, organized, and well-arranged", dimension: "JP", direction: "J" },
      {
        text: "Creative, adaptable, with organized chaos",
        dimension: "JP",
        direction: "P",
      },
    ],
  },
  {
    id: "q101",
    question: "When you travel, how do you prefer to approach it?",
    options: [
      { text: "With a planned schedule and clear itinerary", dimension: "JP", direction: "J" },
      { text: "With flexibility to explore and discover spontaneously", dimension: "JP", direction: "P" },
    ],
  },
  {
    id: "q102",
    question: "When entering new situations, do you prefer to:",
    options: [
      {
        text: "Have clear expectations and understand what's involved",
        dimension: "JP",
        direction: "J",
      },
      { text: "Embrace the unexpected and be pleasantly surprised", dimension: "JP", direction: "P" },
    ],
  },
  {
    id: "q103",
    question: "How do you view deadlines?",
    options: [
      {
        text: "As useful structures that help organize work effectively",
        dimension: "JP",
        direction: "J",
      },
      { text: "As stressful constraints that limit creativity", dimension: "JP", direction: "P" },
    ],
  },
  {
    id: "q104",
    question: "What kind of environment do you work best in?",
    options: [
      { text: "Structured, organized, and methodical", dimension: "JP", direction: "J" },
      { text: "Relaxed, adaptable, and free-flowing", dimension: "JP", direction: "P" },
    ],
  },
  {
    id: "q105",
    question: "When beginning a new project, how do you approach it?",
    options: [
      {
        text: "Develop a detailed plan with clear steps and deadlines",
        dimension: "JP",
        direction: "J",
      },
      {
        text: "Start working and develop your approach as you progress",
        dimension: "JP",
        direction: "P",
      },
    ],
  },
  {
    id: "q106",
    question: "Which is more natural for you?",
    options: [
      { text: "Following a consistent daily schedule", dimension: "JP", direction: "J" },
      { text: "Adjusting your activities based on how you feel", dimension: "JP", direction: "P" },
    ],
  },
  {
    id: "q107",
    question: "In work or school settings, do you prefer:",
    options: [
      {
        text: "Specific instructions and well-defined expectations",
        dimension: "JP",
        direction: "J",
      },
      {
        text: "General guidance with freedom to approach tasks your way",
        dimension: "JP",
        direction: "P",
      },
    ],
  },
  {
    id: "q108",
    question: "Which do you consider more important?",
    options: [
      {
        text: "Reaching conclusions and completing tasks",
        dimension: "JP",
        direction: "J",
      },
      { text: "Continuing to consider different possibilities", dimension: "JP", direction: "P" },
    ],
  },
  {
    id: "q109",
    question: "When making decisions, do you tend to:",
    options: [
      {
        text: "Decide promptly and commit to your choice",
        dimension: "JP",
        direction: "J",
      },
      {
        text: "Reconsider your options as circumstances change",
        dimension: "JP",
        direction: "P",
      },
    ],
  },
  {
    id: "q110",
    question: "How do you prefer your living space to be?",
    options: [
      { text: "Well-organized with everything in its proper place", dimension: "JP", direction: "J" },
      {
        text: "Comfortable and functional, even if somewhat disorganized",
        dimension: "JP",
        direction: "P",
      },
    ],
  },
  {
    id: "q111",
    question: "Which approach brings you more fulfillment?",
    options: [
      {
        text: "Honoring commitments and completing what you start",
        dimension: "JP",
        direction: "J",
      },
      {
        text: "Pursuing new opportunities when they become available",
        dimension: "JP",
        direction: "P",
      },
    ],
  },
  {
    id: "q112",
    question: "When preparing food, do you prefer to:",
    options: [
      { text: "Follow recipes exactly as written", dimension: "JP", direction: "J" },
      { text: "Improvise and add your own creative touches", dimension: "JP", direction: "P" },
    ],
  },
  {
    id: "q113",
    question: "What type of work environment suits you best?",
    options: [
      {
        text: "Structured with clear procedures and responsibilities",
        dimension: "JP",
        direction: "J",
      },
      {
        text: "Flexible with room for innovation and adjustment",
        dimension: "JP",
        direction: "P",
      },
    ],
  },
  {
    id: "q114",
    question: "Which qualities do you value more in yourself?",
    options: [
      { text: "Being methodical, prepared, and systematic", dimension: "JP", direction: "J" },
      { text: "Being flexible, responsive, and open to change", dimension: "JP", direction: "P" },
    ],
  },
  {
    id: "q115",
    question: "When faced with choices, do you prefer to:",
    options: [
      {
        text: "Make a decision quickly and proceed accordingly",
        dimension: "JP",
        direction: "J",
      },
      {
        text: "Collect more information before committing to a choice",
        dimension: "JP",
        direction: "P",
      },
    ],
  },
  {
    id: "q116",
    question: "How do you manage your time and appointments?",
    options: [
      {
        text: "Plan activities in advance with a detailed calendar",
        dimension: "JP",
        direction: "J",
      },
      { text: "Keep your schedule open for last-minute opportunities", dimension: "JP", direction: "P" },
    ],
  },
  {
    id: "q117",
    question: "Which gives you more satisfaction?",
    options: [
      { text: "Finishing projects and reaching conclusions", dimension: "JP", direction: "J" },
      { text: "Exploring options and keeping discussions open", dimension: "JP", direction: "P" },
    ],
  },
  {
    id: "q118",
    question: "When approaching tasks, are you more comfortable:",
    options: [
      {
        text: "Using proven methods and established guidelines",
        dimension: "JP",
        direction: "J",
      },
      { text: "Developing your own unique approach to each situation", dimension: "JP", direction: "P" },
    ],
  },
  {
    id: "q119",
    question: "What type of environment helps you function best?",
    options: [
      { text: "Predictable, orderly, and well-organized", dimension: "JP", direction: "J" },
      {
        text: "Dynamic, evolving, and open to modification",
        dimension: "JP",
        direction: "P",
      },
    ],
  },
  {
    id: "q120",
    question: "Which approach do you generally prefer?",
    options: [
      { text: "Making firm decisions and implementing them", dimension: "JP", direction: "J" },
      {
        text: "Remaining receptive to new information and changes",
        dimension: "JP",
        direction: "P",
      },
    ],
  },
];

module.exports = { questionBank };