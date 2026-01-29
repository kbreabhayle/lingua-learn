export type Category = 'phrasal verbs' | 'slang words';

export interface VocabularyItem {
  id: string;
  word_or_phrase: string;
  meaning: string;
  example_sentence: string;
  category: Category;
  difficulty: 'beginner' | 'intermediate';
}

export const VOCABULARY: VocabularyItem[] = [
  // Phrasal Verbs
  {
    id: 'pv-001',
    word_or_phrase: 'Get along',
    meaning: 'To have a harmonious or friendly relationship.',
    example_sentence: 'They seem to get along really well despite their differences.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-002',
    word_or_phrase: 'Look forward to',
    meaning: 'To feel excited about something that is going to happen.',
    example_sentence: "I'm looking forward to our vacation next month.",
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-003',
    word_or_phrase: 'Break down',
    meaning: 'To stop working (usually a machine or vehicle).',
    example_sentence: 'The car broke down on the way to the airport.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-004',
    word_or_phrase: 'Call off',
    meaning: 'To cancel something that was planned.',
    example_sentence: 'They had to call off the meeting because the CEO was ill.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  // Slang Words
  {
    id: 'sl-001',
    word_or_phrase: 'Cap',
    meaning: 'A lie or something that is not true.',
    example_sentence: '"I just ran a marathon in 2 hours." "That\'s cap!"',
    category: 'slang words',
    difficulty: 'intermediate'
  },
  {
    id: 'sl-002',
    word_or_phrase: 'Ghost',
    meaning: 'To suddenly stop all communication with someone.',
    example_sentence: 'I thought we had a great date, but then he ghosted me.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-003',
    word_or_phrase: 'Salty',
    meaning: 'Being upset, angry, or bitter, usually over something minor.',
    example_sentence: 'He’s still salty because he lost the game.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-004',
    word_or_phrase: 'Tea',
    meaning: 'Gossip or juicy information.',
    example_sentence: 'Come on, spill the tea! What happened at the party?',
    category: 'slang words',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-005',
    word_or_phrase: 'Run out of',
    meaning: 'To finish a supply of something.',
    example_sentence: 'We ran out of milk, so I need to go to the store.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-006',
    word_or_phrase: 'Try on',
    meaning: 'To put on clothes to see if they fit.',
    example_sentence: 'She tried on the dress before buying it.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-007',
    word_or_phrase: 'Give up',
    meaning: 'To stop doing something or stop trying.',
    example_sentence: 'Never give up on your dreams!',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'sl-005',
    word_or_phrase: 'Flex',
    meaning: 'To show off or boast about something.',
    example_sentence: 'Showing off his new car was quite a flex.',
    category: 'slang words',
    difficulty: 'intermediate'
  },
  {
    id: 'sl-006',
    word_or_phrase: 'Sus',
    meaning: 'Short for suspicious or suspect.',
    example_sentence: 'That guy over there is acting a bit sus.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-007',
    word_or_phrase: 'Extra',
    meaning: 'Being over the top or dramatic.',
    example_sentence: 'She was being so extra about the tiny stain on her shirt.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'pv-008',
    word_or_phrase: 'Bring up',
    meaning: 'To mention a topic in conversation.',
    example_sentence: 'She decided to bring up the issue during the meeting.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-009',
    word_or_phrase: 'Check out',
    meaning: 'To look at or investigate something.',
    example_sentence: 'You should check out that new cafe downtown.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-010',
    word_or_phrase: 'Drop by',
    meaning: 'To visit someone briefly without an appointment.',
    example_sentence: 'Feel free to drop by my office whenever you have a question.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-011',
    word_or_phrase: 'Eat out',
    meaning: 'To eat at a restaurant instead of at home.',
    example_sentence: 'We usually eat out on Friday nights.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-012',
    word_or_phrase: 'Fill out',
    meaning: 'To complete a form or document.',
    example_sentence: 'Please fill out this application and return it to me.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-013',
    word_or_phrase: 'Get over',
    meaning: 'To recover from an illness or a difficult situation.',
    example_sentence: 'It took him a long time to get over the loss of his job.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-014',
    word_or_phrase: 'Give in',
    meaning: 'To finally agree to something after refusing it initially.',
    example_sentence: 'The government finally gave in to the protesters\' demands.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-015',
    word_or_phrase: 'Hang out',
    meaning: 'To spend time relaxing or socializing.',
    example_sentence: 'We spent the afternoon hanging out at the beach.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-016',
    word_or_phrase: 'Keep on',
    meaning: 'To continue doing something.',
    example_sentence: 'She kept on working even though she was tired.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-017',
    word_or_phrase: 'Look after',
    meaning: 'To take care of someone or something.',
    example_sentence: 'Can you look after my cat while I\'m away?',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-018',
    word_or_phrase: 'Make up',
    meaning: 'To invent a story or explanation.',
    example_sentence: 'She made up an excuse for being late.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-019',
    word_or_phrase: 'Pass out',
    meaning: 'To faint or lose consciousness.',
    example_sentence: 'It was so hot that several people passed out.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-020',
    word_or_phrase: 'Put off',
    meaning: 'To delay doing something.',
    example_sentence: 'Never put off until tomorrow what you can do today.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-021',
    word_or_phrase: 'Run into',
    meaning: 'To meet someone by chance.',
    example_sentence: 'I ran into an old friend at the supermarket.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-022',
    word_or_phrase: 'Set up',
    meaning: 'To arrange or establish something.',
    example_sentence: 'We need to set up a meeting to discuss the project.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-023',
    word_or_phrase: 'Take off',
    meaning: 'To remove something (like clothing) or to leave the ground (as an airplane).',
    example_sentence: 'Please take off your shoes before entering the house.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-024',
    word_or_phrase: 'Turn down',
    meaning: 'To refuse an offer or request.',
    example_sentence: 'She turned down the job offer because the salary was too low.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-025',
    word_or_phrase: 'Wake up',
    meaning: 'To stop sleeping.',
    example_sentence: 'I usually wake up at 7 AM.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-026',
    word_or_phrase: 'Work out',
    meaning: 'To exercise or to find a solution to a problem.',
    example_sentence: 'I try to work out at the gym three times a week.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-027',
    word_or_phrase: 'Watch out',
    meaning: 'To be careful or alert.',
    example_sentence: 'Watch out for that car!',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-028',
    word_or_phrase: 'Back off',
    meaning: 'To move backwards or away from someone or something.',
    example_sentence: 'The police officer told the crowd to back off.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-029',
    word_or_phrase: 'Call back',
    meaning: 'To return a phone call.',
    example_sentence: 'I\'ll call you back in a few minutes.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-030',
    word_or_phrase: 'Dress up',
    meaning: 'To wear formal or fancy clothes.',
    example_sentence: 'Do we need to dress up for the party?',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-031',
    word_or_phrase: 'Fall apart',
    meaning: 'To break into pieces or to fail completely.',
    example_sentence: 'The old box just fell apart when I picked it up.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-032',
    word_or_phrase: 'Get back',
    meaning: 'To return or to recover something.',
    example_sentence: 'When did you get back from your trip?',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-033',
    word_or_phrase: 'Hold on',
    meaning: 'To wait or to grip something tightly.',
    example_sentence: 'Hold on, I\'ll be right back.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-034',
    word_or_phrase: 'Look up',
    meaning: 'To search for information in a book or online.',
    example_sentence: 'You can look up the definition of the word in a dictionary.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-035',
    word_or_phrase: 'Pay back',
    meaning: 'To return money that was borrowed.',
    example_sentence: 'I\'ll pay you back next week.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-036',
    word_or_phrase: 'Shut up',
    meaning: 'To stop talking (often impolite).',
    example_sentence: 'He told everyone to shut up.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-037',
    word_or_phrase: 'Take out',
    meaning: 'To remove something from a place.',
    example_sentence: 'Don\'t forget to take out the trash.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-038',
    word_or_phrase: 'Warm up',
    meaning: 'To prepare for exercise or to become friendlier.',
    example_sentence: 'You should warm up before you start running.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-039',
    word_or_phrase: 'Blow up',
    meaning: 'To explode or to become very angry.',
    example_sentence: 'The car blew up when it hit the wall.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-040',
    word_or_phrase: 'Break out',
    meaning: 'To start suddenly (like a war or mystery).',
    example_sentence: 'War broke out between the two countries.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-041',
    word_or_phrase: 'Count on',
    meaning: 'To rely on someone or something.',
    example_sentence: 'You can always count on me.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-042',
    word_or_phrase: 'Find out',
    meaning: 'To discover information.',
    example_sentence: 'We found out the truth later.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-043',
    word_or_phrase: 'Go on',
    meaning: 'To continue or to happen.',
    example_sentence: 'The show must go on.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-044',
    word_or_phrase: 'Hurry up',
    meaning: 'To move or do something more quickly.',
    example_sentence: 'Hurry up! We\'re going to be late.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-045',
    word_or_phrase: 'Mess up',
    meaning: 'To make a mistake or to make something untidy.',
    example_sentence: 'I messed up the invitation.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-046',
    word_or_phrase: 'Pull over',
    meaning: 'To drive to the side of the road and stop.',
    example_sentence: 'The police officer told him to pull over.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-047',
    word_or_phrase: 'Show off',
    meaning: 'To try to impress others by displaying skills or possessions.',
    example_sentence: 'He always shows off his expensive watch.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-048',
    word_or_phrase: 'Take off',
    meaning: 'To remove something or to leave quickly.',
    example_sentence: 'Please take off your hat inside.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-049',
    word_or_phrase: 'Turn off',
    meaning: 'To stop a machine or flow.',
    example_sentence: 'Don\'t forget to turn off the lights.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-050',
    word_or_phrase: 'Write down',
    meaning: 'To record information on paper.',
    example_sentence: 'Let me write down your phone number.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-051',
    word_or_phrase: 'Break in',
    meaning: 'To enter a building by force.',
    example_sentence: 'The burglars tried to break in through the window.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-052',
    word_or_phrase: 'Call on',
    meaning: 'To visit someone or to ask someone to speak.',
    example_sentence: 'I\'ll call on her this afternoon.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-053',
    word_or_phrase: 'Come across',
    meaning: 'To find something by chance.',
    example_sentence: 'I came across these old photos in the attic.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-054',
    word_or_phrase: 'Cut back',
    meaning: 'To reduce the amount of something used or spent.',
    example_sentence: 'We need to cut back on our spending.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-055',
    word_or_phrase: 'End up',
    meaning: 'To eventually reach a place or situation.',
    example_sentence: 'We ended up getting lost in the city.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-056',
    word_or_phrase: 'Get by',
    meaning: 'To manage with difficulty.',
    example_sentence: 'I can only just get by on my salary.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-057',
    word_or_phrase: 'Give back',
    meaning: 'To return something.',
    example_sentence: 'Can you give back my book?',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-058',
    word_or_phrase: 'Go ahead',
    meaning: 'To proceed or start doing something.',
    example_sentence: 'Go ahead and start the presentation.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-059',
    word_or_phrase: 'Keep up',
    meaning: 'To continue at the same rate.',
    example_sentence: 'Keep up the good work!',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-060',
    word_or_phrase: 'Look forward to',
    meaning: 'To be excited about the future.',
    example_sentence: 'I\'m looking forward to our trip.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-061',
    word_or_phrase: 'Make up',
    meaning: 'To reconcile after a fight.',
    example_sentence: 'They finally made up after their argument.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-062',
    word_or_phrase: 'Pick out',
    meaning: 'To choose something from a group.',
    example_sentence: 'She picked out a beautiful dress for the wedding.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-063',
    word_or_phrase: 'Put on',
    meaning: 'To wear clothing or to organize an event.',
    example_sentence: 'Put on your coat, it\'s cold outside.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-064',
    word_or_phrase: 'Run out of',
    meaning: 'To use up all of something.',
    example_sentence: 'We\'ve run out of milk.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-065',
    word_or_phrase: 'Take up',
    meaning: 'To start a new hobby or activity.',
    example_sentence: 'I\'ve decided to take up painting.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-066',
    word_or_phrase: 'Turn out',
    meaning: 'To result or end in a particular way.',
    example_sentence: 'The cake turned out really well.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-067',
    word_or_phrase: 'Work out',
    meaning: 'To have a successful result.',
    example_sentence: 'I hope everything works out for you.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-068',
    word_or_phrase: 'Back up',
    meaning: 'To move backward or to support someone.',
    example_sentence: 'Can you back up a little?',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-069',
    word_or_phrase: 'Bring about',
    meaning: 'To cause something to happen.',
    example_sentence: 'The new policy brought about many changes.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-070',
    word_or_phrase: 'Call off',
    meaning: 'To cancel an event.',
    example_sentence: 'The soccer game was called off due to rain.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-071',
    word_or_phrase: 'Check in',
    meaning: 'To register at a hotel or airport.',
    example_sentence: 'We checked in at the hotel at 3 PM.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-072',
    word_or_phrase: 'Come up with',
    meaning: 'To think of an idea or plan.',
    example_sentence: 'She came up with a great solution.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-073',
    word_or_phrase: 'Do over',
    meaning: 'To do something again.',
    example_sentence: 'I had to do the assignment over.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-074',
    word_or_phrase: 'Eat up',
    meaning: 'To eat all of something.',
    example_sentence: 'Eat up your vegetables!',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-075',
    word_or_phrase: 'Fall down',
    meaning: 'To drop to the ground.',
    example_sentence: 'He tripped and fell down.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-076',
    word_or_phrase: 'Get away',
    meaning: 'To escape or to go on vacation.',
    example_sentence: 'The thief got away in a stolen car.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-077',
    word_or_phrase: 'Give off',
    meaning: 'To emit something (like a smell or light).',
    example_sentence: 'The flowers gave off a lovely scent.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-078',
    word_or_phrase: 'Go through',
    meaning: 'To examine carefully or to experience something difficult.',
    example_sentence: 'Let\'s go through the details together.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-079',
    word_or_phrase: 'Hold up',
    meaning: 'To delay or to rob something using a weapon.',
    example_sentence: 'We were held up by traffic.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-080',
    word_or_phrase: 'Keep out',
    meaning: 'To prevent someone or something from entering.',
    example_sentence: 'Danger: Keep Out!',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-081',
    word_or_phrase: 'Look out',
    meaning: 'To be vigilant or careful.',
    example_sentence: 'Look out for pickpockets in this area.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-082',
    word_or_phrase: 'Make for',
    meaning: 'To move toward something.',
    example_sentence: 'They made for the exit when the fire alarm rang.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-083',
    word_or_phrase: 'Pass by',
    meaning: 'To go past something or someone.',
    example_sentence: 'I passed by your house today.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-084',
    word_or_phrase: 'Put up with',
    meaning: 'To tolerate something unpleasant.',
    example_sentence: 'I can\'t put up with his loud music anymore.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-085',
    word_or_phrase: 'Run away',
    meaning: 'To escape or leave home secretly.',
    example_sentence: 'The cat ran away from the dog.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-086',
    word_or_phrase: 'Set off',
    meaning: 'To start a journey or to trigger something.',
    example_sentence: 'We set off early in the morning.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-087',
    word_or_phrase: 'Take back',
    meaning: 'To return something or to withdraw a statement.',
    example_sentence: 'I had to take the shirt back to the store.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-088',
    word_or_phrase: 'Turn in',
    meaning: 'To give something to someone or to go to bed.',
    example_sentence: 'Please turn in your homework.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-089',
    word_or_phrase: 'Wake up',
    meaning: 'To become conscious after sleeping.',
    example_sentence: 'I woke up early this morning.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-090',
    word_or_phrase: 'Wait up',
    meaning: 'To stay awake waiting for someone.',
    example_sentence: 'I\'ll wait up for you.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-091',
    word_or_phrase: 'Bring on',
    meaning: 'To cause something to occur.',
    example_sentence: 'The cold weather brought on his cough.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-092',
    word_or_phrase: 'Check out',
    meaning: 'To look at something interesting.',
    example_sentence: 'Check out this cool website!',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-093',
    word_or_phrase: 'Drop out',
    meaning: 'To leave a school or course before finishing.',
    example_sentence: 'He dropped out of college after one year.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-094',
    word_or_phrase: 'Fill in',
    meaning: 'To complete information or to substitute for someone.',
    example_sentence: 'Can you fill in the blanks?',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-095',
    word_or_phrase: 'Get through',
    meaning: 'To finish something or to reach someone by phone.',
    example_sentence: 'I can\'t get through to him.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-096',
    word_or_phrase: 'Give way',
    meaning: 'To break under pressure or to allow others to pass.',
    example_sentence: 'The bridge gave way under the weight of the truck.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-097',
    word_or_phrase: 'Go away',
    meaning: 'To leave a place.',
    example_sentence: 'Go away and leave me alone!',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-098',
    word_or_phrase: 'Keep back',
    meaning: 'To maintain distance.',
    example_sentence: 'Keep back from the edge!',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-099',
    word_or_phrase: 'Look through',
    meaning: 'To read quickly or examine.',
    example_sentence: 'I\'ll look through the report later.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-100',
    word_or_phrase: 'Make over',
    meaning: 'To transform someone or something.',
    example_sentence: 'They gave the house a complete makeover.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-101',
    word_or_phrase: 'Pass on',
    meaning: 'To give something to someone else or to die.',
    example_sentence: 'Please pass on the message.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-102',
    word_or_phrase: 'Put away',
    meaning: 'To put something in its proper place.',
    example_sentence: 'Put away your toys before bedtime.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-103',
    word_or_phrase: 'Run over',
    meaning: 'To hit someone or something with a vehicle.',
    example_sentence: 'A cat was run over by a car.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-104',
    word_or_phrase: 'Set up',
    meaning: 'To establish or organize.',
    example_sentence: 'He set up his own business last year.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-105',
    word_or_phrase: 'Take over',
    meaning: 'To assume control or responsibility.',
    example_sentence: 'The new manager will take over on Monday.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-106',
    word_or_phrase: 'Turn over',
    meaning: 'To flip something or to surrender something.',
    example_sentence: 'Turn over the page.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-107',
    word_or_phrase: 'Watch out',
    meaning: 'To be careful.',
    example_sentence: 'Watch out for that car!',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'sl-008',
    word_or_phrase: 'GOAT',
    meaning: 'Greatest Of All Time.',
    example_sentence: 'In basketball, many believe Jordan is the GOAT.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-009',
    word_or_phrase: 'No cap',
    meaning: 'I am not lying; for real.',
    example_sentence: 'That was the best pizza I\'ve ever had, no cap.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-010',
    word_or_phrase: 'Salty',
    meaning: 'Being upset or bitter about something minor.',
    example_sentence: 'He\'s still salty because he lost the game.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-011',
    word_or_phrase: 'Shook',
    meaning: 'Extremely surprised or shocked.',
    example_sentence: 'I was totally shook by the ending of that movie.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-012',
    word_or_phrase: 'Stan',
    meaning: 'An obsessive fan of a celebrity.',
    example_sentence: 'She is a total Taylor Swift stan.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-013',
    word_or_phrase: 'Vibe check',
    meaning: 'Checking the emotional state or energy of a person or place.',
    example_sentence: 'He walked in and immediately gave us a vibe check.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-014',
    word_or_phrase: 'Woke',
    meaning: 'Being aware of social and political issues.',
    example_sentence: 'It\'s important to stay woke about climate change.',
    category: 'slang words',
    difficulty: 'intermediate'
  },
  {
    id: 'sl-015',
    word_or_phrase: 'Yeet',
    meaning: 'To throw something with great force or an exclamation of excitement.',
    example_sentence: 'He just yeeted his phone onto the couch.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-016',
    word_or_phrase: 'Bussin\'',
    meaning: 'Extremely delicious (usually about food).',
    example_sentence: 'This burger is straight bussin\'.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-017',
    word_or_phrase: 'Clout',
    meaning: 'Influence or power, especially on social media.',
    example_sentence: 'He\'s just doing it for the clout.',
    category: 'slang words',
    difficulty: 'intermediate'
  },
  {
    id: 'sl-018',
    word_or_phrase: 'Drip',
    meaning: 'A cool or stylish sense of fashion.',
    example_sentence: 'Look at his new outfit, he\'s got drip.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-019',
    word_or_phrase: 'Finesse',
    meaning: 'To handle a situation skillfully or to trick someone smoothly.',
    example_sentence: 'He managed to finesse his way into the VIP section.',
    category: 'slang words',
    difficulty: 'intermediate'
  },
  {
    id: 'sl-020',
    word_or_phrase: 'Glow up',
    meaning: 'A major positive transformation in appearance or confidence.',
    example_sentence: 'She had a huge glow up over the summer.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-021',
    word_or_phrase: 'High-key',
    meaning: 'Openly or intensely.',
    example_sentence: 'I high-key want to win this competition.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-022',
    word_or_phrase: 'Low-key',
    meaning: 'Secretly or moderately.',
    example_sentence: 'I low-key love that cheesy pop song.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-023',
    word_or_phrase: 'Main character energy',
    meaning: 'Being the center of attention or living life with confidence.',
    example_sentence: 'She walked into the room with serious main character energy.',
    category: 'slang words',
    difficulty: 'intermediate'
  },
  {
    id: 'sl-024',
    word_or_phrase: 'Noob',
    meaning: 'A person who is new to a game or activity.',
    example_sentence: 'Don\'t be mean to him, he\'s just a noob.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-025',
    word_or_phrase: 'On fleek',
    meaning: 'Perfectly done or styled.',
    example_sentence: 'Her eyebrows are always on fleek.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-026',
    word_or_phrase: 'Periodt',
    meaning: 'Used to emphasize that a statement is final.',
    example_sentence: 'That\'s the best movie ever, periodt.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-027',
    word_or_phrase: 'Rent free',
    meaning: 'Thinking about someone or something constantly.',
    example_sentence: 'That song is living in my head rent free.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-028',
    word_or_phrase: 'Savage',
    meaning: 'Being fierce, brutal, or unapologetically honest.',
    example_sentence: 'That comeback was absolutely savage.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-029',
    word_or_phrase: 'Simp',
    meaning: 'Someone who does way too much for a person they like.',
    example_sentence: 'He\'s such a simp for her.',
    category: 'slang words',
    difficulty: 'intermediate'
  },
  {
    id: 'sl-030',
    word_or_phrase: 'Slay',
    meaning: 'To do something exceptionally well.',
    example_sentence: 'You absolutely slayed that performance!',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-031',
    word_or_phrase: 'Snack',
    meaning: 'Someone who looks very attractive.',
    example_sentence: 'Looking good today! You look like a snack.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-032',
    word_or_phrase: 'Squad',
    meaning: 'A close group of friends.',
    example_sentence: 'I\'m heading out with the squad tonight.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-033',
    word_or_phrase: 'TFW',
    meaning: 'That Feeling When.',
    example_sentence: 'TFW you finally finish all your homework.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-034',
    word_or_phrase: 'Thirsty',
    meaning: 'Desperate for attention or approval.',
    example_sentence: 'Posting that many selfies is just thirsty.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-035',
    word_or_phrase: 'Valid',
    meaning: 'Something that is reasonable or understandable.',
    example_sentence: 'That\'s a valid point.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-036',
    word_or_phrase: 'Vibe',
    meaning: 'The emotional atmosphere of a person or place.',
    example_sentence: 'This place has a really cool vibe.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-037',
    word_or_phrase: 'W',
    meaning: 'A win or success.',
    example_sentence: 'We got the W today!',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-038',
    word_or_phrase: 'L',
    meaning: 'A loss or failure.',
    example_sentence: 'That\'s a major L for the team.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-039',
    word_or_phrase: 'Zesty',
    meaning: 'Energetic, lively, or slightly flamboyant.',
    example_sentence: 'Her personality is so zesty and fun.',
    category: 'slang words',
    difficulty: 'intermediate'
  },
  {
    id: 'sl-040',
    word_or_phrase: 'Boujee',
    meaning: 'High-class or fancy, often in a showy way.',
    example_sentence: 'She\'s feeling boujee in her new designer shoes.',
    category: 'slang words',
    difficulty: 'intermediate'
  },
  {
    id: 'sl-041',
    word_or_phrase: 'Cap',
    meaning: 'To lie or a lie.',
    example_sentence: 'Stop with the cap, I know that didn\'t happen.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-042',
    word_or_phrase: 'Dead',
    meaning: 'Something is extremely funny.',
    example_sentence: 'I am dead after seeing that meme.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-043',
    word_or_phrase: 'Fam',
    meaning: 'Close friends who are like family.',
    example_sentence: 'What\'s up, fam?',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-044',
    word_or_phrase: 'Finna',
    meaning: 'Going to; about to.',
    example_sentence: 'I\'m finna go to the store.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-045',
    word_or_phrase: 'Ghost',
    meaning: 'To suddenly stop communicating with someone.',
    example_sentence: 'I can\'t believe he just ghosted me.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-046',
    word_or_phrase: 'Gucci',
    meaning: 'Good, cool, or okay.',
    example_sentence: 'Don\'t worry, it\'s all gucci.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-047',
    word_or_phrase: 'Hundo P',
    meaning: 'One hundred percent; totally agree.',
    example_sentence: 'I\'m down for that plan hundo p.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-048',
    word_or_phrase: 'Irl',
    meaning: 'In Real Life.',
    example_sentence: 'Have you ever met him irl?',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-049',
    word_or_phrase: 'It\'s giving',
    meaning: 'It reminds me of or embodies a certain vibe.',
    example_sentence: 'It\'s giving 90s fashion.',
    category: 'slang words',
    difficulty: 'intermediate'
  },
  {
    id: 'sl-050',
    word_or_phrase: 'Karen',
    meaning: 'A slang term for an entitled person.',
    example_sentence: 'She was being such a Karen at the grocery store.',
    category: 'slang words',
    difficulty: 'intermediate'
  },
  {
    id: 'sl-051',
    word_or_phrase: 'Lit',
    meaning: 'Amazing, exciting, or high energy.',
    example_sentence: 'The party last night was totally lit!',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-052',
    word_or_phrase: 'Mood',
    meaning: 'Relatable; something that perfectly describes your current state.',
    example_sentence: 'That cat sleeping is such a mood.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-053',
    word_or_phrase: 'Oof',
    meaning: 'An exclamation of sympathy or realization of a mistake.',
    example_sentence: 'Oof, that sounds painful.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-054',
    word_or_phrase: 'Opp',
    meaning: 'Opposition or enemy.',
    example_sentence: 'Watch out, he\'s an opp.',
    category: 'slang words',
    difficulty: 'intermediate'
  },
  {
    id: 'sl-055',
    word_or_phrase: 'Rizz',
    meaning: 'Charisma, especially in romantic situations.',
    example_sentence: 'He\'s got so much rizz.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-056',
    word_or_phrase: 'Side-eye',
    meaning: 'A skeptical or judgmental look.',
    example_sentence: 'I saw her give him a side-eye when he made that comment.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-057',
    word_or_phrase: 'Sksksk',
    meaning: 'An onomatopoeic expression of laughter or excitement.',
    example_sentence: 'That meme is so funny sksksk!',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-058',
    word_or_phrase: 'Sus',
    meaning: 'Suspicious or suspect.',
    example_sentence: 'That\'s a bit sus, don\'t you think?',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-059',
    word_or_phrase: 'Tea',
    meaning: 'Gossip or juicy information.',
    example_sentence: 'What\'s the tea on the new office intern?',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-060',
    word_or_phrase: 'Thirst trap',
    meaning: 'A social media post intended to entice viewers sexually.',
    example_sentence: 'He just posted another thirst trap on Instagram.',
    category: 'slang words',
    difficulty: 'intermediate'
  },
  {
    id: 'sl-061',
    word_or_phrase: 'Tight',
    meaning: 'Angry or upset; or cool/good.',
    example_sentence: 'He got tight because he didn\'t get invited.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-062',
    word_or_phrase: 'Toxic',
    meaning: 'Describes a person or behavior that is harmful or negative.',
    example_sentence: 'That relationship was so toxic.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-063',
    word_or_phrase: 'Understood the assignment',
    meaning: 'Doing something perfectly or meeting expectations exactly.',
    example_sentence: 'She absolutely understood the assignment with that outfit.',
    category: 'slang words',
    difficulty: 'intermediate'
  },
  {
    id: 'sl-064',
    word_or_phrase: 'Vibe check',
    meaning: 'Spontaneous assessment of someone\'s energy.',
    example_sentence: 'Vibe check: everyone ready for the weekend?',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-065',
    word_or_phrase: 'Wig snatched',
    meaning: 'Being extremely shocked or impressed.',
    example_sentence: 'Her performance had my wig snatched!',
    category: 'slang words',
    difficulty: 'intermediate'
  },
  {
    id: 'sl-066',
    word_or_phrase: 'Woke',
    meaning: 'Alert to social injustice.',
    example_sentence: 'He\'s very woke about environmental issues.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-067',
    word_or_phrase: 'Yeet',
    meaning: 'Expression of excitement or to throw something.',
    example_sentence: 'Yeet! We won!',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-068',
    word_or_phrase: 'Yolo',
    meaning: 'You Only Live Once.',
    example_sentence: 'I\'m going skydiving, yolo!',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-069',
    word_or_phrase: 'Zaddy',
    meaning: 'A stylish, attractive man with swagger.',
    example_sentence: 'He\'s looking like a total zaddy today.',
    category: 'slang words',
    difficulty: 'intermediate'
  },
  {
    id: 'sl-070',
    word_or_phrase: 'Zero chills',
    meaning: 'Being insensitive or acting without restraint.',
    example_sentence: 'He has zero chills for calling him out like that.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-071',
    word_or_phrase: 'Bae',
    meaning: 'Before Anyone Else; a significant other.',
    example_sentence: 'Spending time with bae tonight.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-072',
    word_or_phrase: 'Basic',
    meaning: 'Mainstream or unoriginal.',
    example_sentence: 'That outfit is so basic.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-073',
    word_or_phrase: 'Bet',
    meaning: 'Agreement or a challenge.',
    example_sentence: 'Wanna race? Bet!',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-074',
    word_or_phrase: 'Big Yikes',
    meaning: 'A strong expression of embarrassment or cringing.',
    example_sentence: 'He said that to his boss? Big yikes.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-075',
    word_or_phrase: 'Canceled',
    meaning: 'Ending support for a person or thing due to problematic behavior.',
    example_sentence: 'That show is canceled after the lead actor\'s comments.',
    category: 'slang words',
    difficulty: 'intermediate'
  },
  {
    id: 'sl-076',
    word_or_phrase: 'Catch these hands',
    meaning: 'A threat to start a physical fight.',
    example_sentence: 'If he keeps talking, he\'s gonna catch these hands.',
    category: 'slang words',
    difficulty: 'intermediate'
  },
  {
    id: 'sl-077',
    word_or_phrase: 'Chillax',
    meaning: 'Chill and relax.',
    example_sentence: 'Just chillax, everything will be fine.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-078',
    word_or_phrase: 'Curve',
    meaning: 'To reject someone\'s romantic advances.',
    example_sentence: 'She totally curved him when he asked for her number.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-079',
    word_or_phrase: 'Dope',
    meaning: 'Cool or excellent.',
    example_sentence: 'That new song is really dope.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-080',
    word_or_phrase: 'Fager',
    meaning: 'Someone who is eager or enthusiastic (often sarcastically).',
    example_sentence: 'Look at eager fager over there.',
    category: 'slang words',
    difficulty: 'intermediate'
  },
  {
    id: 'sl-081',
    word_or_phrase: 'Fire',
    meaning: 'Amazing or excellent.',
    example_sentence: 'This new album is fire!',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-082',
    word_or_phrase: 'Flex',
    meaning: 'To show off.',
    example_sentence: 'It\'s not a flex to work 80 hours a week.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-083',
    word_or_phrase: 'FOMO',
    meaning: 'Fear Of Missing Out.',
    example_sentence: 'I have serious FOMO looking at their vacation photos.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-084',
    word_or_phrase: 'Glow up',
    meaning: 'Positive transformation.',
    example_sentence: 'His glow up since high school is insane.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-085',
    word_or_phrase: 'Goalz',
    meaning: 'Something to aspire to.',
    example_sentence: 'Their relationship is total goalz.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-086',
    word_or_phrase: 'Hard pass',
    meaning: 'A firm rejection.',
    example_sentence: 'Wanna go to that boring meeting? Hard pass.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-087',
    word_or_phrase: 'Hater',
    meaning: 'A person who expresses negative opinions about others.',
    example_sentence: 'Don\'t mind them, they\'re just a hater.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-088',
    word_or_phrase: 'I can\'t even',
    meaning: 'Expression of being overwhelmed by emotion or disbelief.',
    example_sentence: 'That puppy is so cute, I can\'t even!',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-089',
    word_or_phrase: 'Idgaf',
    meaning: 'I Don\'t Give A... (expression of indifference).',
    example_sentence: 'Idgaf what they think about me.',
    category: 'slang words',
    difficulty: 'intermediate'
  },
  {
    id: 'sl-090',
    word_or_phrase: 'Imo',
    meaning: 'In My Opinion.',
    example_sentence: 'Imo, this is the better option.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-091',
    word_or_phrase: 'Jelly',
    meaning: 'Jealous.',
    example_sentence: 'I\'m so jelly of your new phone.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-092',
    word_or_phrase: 'Killin\' it',
    meaning: 'Doing something very well.',
    example_sentence: 'You are killin\' it at your new job!',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-093',
    word_or_phrase: 'Legit',
    meaning: 'Authentic or high quality.',
    example_sentence: 'This restaurant is legit.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-094',
    word_or_phrase: 'Lurk',
    meaning: 'To watch social media without interacting.',
    example_sentence: 'I mostly just lurk on Twitter.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-095',
    word_or_phrase: 'Meme',
    meaning: 'A humorous image or video spread rapidly online.',
    example_sentence: 'That meme perfectly describes my day.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-096',
    word_or_phrase: 'Noob',
    meaning: 'Beginner or inexperienced person.',
    example_sentence: 'Stop acting like a noob.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-097',
    word_or_phrase: 'On point',
    meaning: 'Perfectly executed.',
    example_sentence: 'Your presentation was on point.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-098',
    word_or_phrase: 'Owned',
    meaning: 'Defeated or humiliated.',
    example_sentence: 'You just got owned in that debate!',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-099',
    word_or_phrase: 'Phat',
    meaning: 'Excellent or cool (vintage slang).',
    example_sentence: 'That car is phat!',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-100',
    word_or_phrase: 'Receipts',
    meaning: 'Evidence or proof of someone\'s actions or statements.',
    example_sentence: 'She came with the receipts to prove he was lying.',
    category: 'slang words',
    difficulty: 'intermediate'
  },
  {
    id: 'sl-101',
    word_or_phrase: 'Salt',
    meaning: 'Bitterness or resentment.',
    example_sentence: 'There\'s so much salt in that comment section.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-102',
    word_or_phrase: 'Shade',
    meaning: 'Subtle or indirect criticism or insult.',
    example_sentence: 'She was throwing major shade at him.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-103',
    word_or_phrase: 'Ship',
    meaning: 'To support a romantic relationship between two people.',
    example_sentence: 'I totally ship them together!',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-104',
    word_or_phrase: 'Slay',
    meaning: 'To succeed or dominate.',
    example_sentence: 'You slayed that interview!',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-105',
    word_or_phrase: 'Snack',
    meaning: 'An attractive person.',
    example_sentence: 'He\'s looking like a whole snack today.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-106',
    word_or_phrase: 'Tea',
    meaning: 'Gossip.',
    example_sentence: 'Spill the tea, I want to know everything.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-107',
    word_or_phrase: 'Trash',
    meaning: 'Of very poor quality; or a person with bad character.',
    example_sentence: 'That movie was absolute trash.',
    category: 'slang words',
    difficulty: 'beginner'
  }
];
// ... more items will be added to reach 500
