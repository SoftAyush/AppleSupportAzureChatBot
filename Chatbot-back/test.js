const { parse } = require('json2csv');
const fs = require('fs');

// Your data
const data = [
  { "question": "What is the capital of the United States?", "answer": "The capital of the United States is Washington, D.C." },
  { "question": "What is the largest planet in our solar system?", "answer": "The largest planet in our solar system is Jupiter." },
  { "question": "Who wrote 'To Kill a Mockingbird'?", "answer": "'To Kill a Mockingbird' was written by Harper Lee." },
  { "question": "What is the tallest mountain on Earth?", "answer": "The tallest mountain on Earth is Mount Everest." },
  { "question": "What is the chemical symbol for gold?", "answer": "The chemical symbol for gold is Au." },
  { "question": "How many continents are there?", "answer": "There are seven continents: Africa, Antarctica, Asia, Europe, North America, Australia, and South America." },
  { "question": "Who painted the Mona Lisa?", "answer": "The Mona Lisa was painted by Leonardo da Vinci." },
  { "question": "What is the largest ocean on Earth?", "answer": "The largest ocean on Earth is the Pacific Ocean." },
  { "question": "What year did World War II end?", "answer": "World War II ended in 1945." },
  { "question": "Who was the first President of the United States?", "answer": "The first President of the United States was George Washington." },
  { "question": "What is the longest river in the world?", "answer": "The longest river in the world is the Nile River." },
  { "question": "What is the main ingredient in guacamole?", "answer": "The main ingredient in guacamole is avocado." },
  { "question": "What is the smallest country in the world?", "answer": "The smallest country in the world is Vatican City." },
  { "question": "Who discovered gravity?", "answer": "Gravity was discovered by Sir Isaac Newton." },
  { "question": "What is the fastest land animal?", "answer": "The fastest land animal is the cheetah." },
  { "question": "What is the square root of 64?", "answer": "The square root of 64 is 8." },
  { "question": "What is the freezing point of water?", "answer": "The freezing point of water is 0°C (32°F)." },
  { "question": "Which planet is known as the Red Planet?", "answer": "Mars is known as the Red Planet." },
  { "question": "Who invented the telephone?", "answer": "The telephone was invented by Alexander Graham Bell." },
  { "question": "What is the currency of Japan?", "answer": "The currency of Japan is the Yen." },
  { "question": "What is the tallest building in the world?", "answer": "The tallest building in the world is the Burj Khalifa in Dubai." },
  { "question": "Who is the author of the Harry Potter series?", "answer": "The author of the Harry Potter series is J.K. Rowling." },
  { "question": "What is the boiling point of water?", "answer": "The boiling point of water is 100°C (212°F)." },
  { "question": "What is the national animal of Australia?", "answer": "The national animal of Australia is the kangaroo." },
  { "question": "What is the currency of the United Kingdom?", "answer": "The currency of the United Kingdom is the Pound Sterling." },
  { "question": "What is the fastest bird in the world?", "answer": "The fastest bird in the world is the Peregrine Falcon." },
  { "question": "What is the longest bone in the human body?", "answer": "The longest bone in the human body is the femur." }
];

// Convert JSON to CSV
const csv = parse(data);

// Write CSV to a file
fs.writeFileSync('questions_answers.csv', csv);

console.log('CSV file has been generated successfully!');