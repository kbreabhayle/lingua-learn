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
    id: 'pv-108',
    word_or_phrase: 'Ask around',
    meaning: 'To ask many people the same question.',
    example_sentence: 'I asked around, but nobody has seen my lost keys.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-109',
    word_or_phrase: 'Blow up',
    meaning: 'To explode or to become very angry.',
    example_sentence: 'The building blew up after the gas leak.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-110',
    word_or_phrase: 'Break down',
    meaning: 'To stop functioning (machine) or to lose control of emotions.',
    example_sentence: 'Our car broke down on the highway.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-111',
    word_or_phrase: 'Break in',
    meaning: 'To force entry into a building or to wear something until it is comfortable.',
    example_sentence: 'Somebody tried to break in while we were away.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-112',
    word_or_phrase: 'Break up',
    meaning: 'To end a relationship.',
    example_sentence: 'They decided to break up after three years.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-113',
    word_or_phrase: 'Bring down',
    meaning: 'To make someone unhappy.',
    example_sentence: 'This sad music is really bringing me down.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-114',
    word_or_phrase: 'Calm down',
    meaning: 'To relax after being angry or excited.',
    example_sentence: 'You need to calm down before you speak to him.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-115',
    word_or_phrase: 'Catch up',
    meaning: 'To reach the same point as someone else.',
    example_sentence: 'Go on ahead, I\'ll catch up with you later.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-116',
    word_or_phrase: 'Check in',
    meaning: 'To arrive and register at a hotel or airport.',
    example_sentence: 'We need to check in two hours before the flight.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-117',
    word_or_phrase: 'Check out',
    meaning: 'To leave a hotel or to investigate something.',
    example_sentence: 'We have to check out by noon.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-118',
    word_or_phrase: 'Clean up',
    meaning: 'To tidy a mess.',
    example_sentence: 'Please clean up your room before dinner.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-119',
    word_or_phrase: 'Come across',
    meaning: 'To find unexpectedly.',
    example_sentence: 'I came across an old photo of my grandmother.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-120',
    word_or_phrase: 'Come forward',
    meaning: 'To volunteer information about a crime.',
    example_sentence: 'The police are asking witnesses to come forward.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-121',
    word_or_phrase: 'Count on',
    meaning: 'To rely on someone.',
    example_sentence: 'You can always count on me for help.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-122',
    word_or_phrase: 'Cross out',
    meaning: 'To draw a line through something.',
    example_sentence: 'Cross out the wrong answer.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-123',
    word_or_phrase: 'Cut back',
    meaning: 'To consume less of something.',
    example_sentence: 'I\'m trying to cut back on sugar.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-124',
    word_or_phrase: 'Cut in',
    meaning: 'To interrupt.',
    example_sentence: 'He keep cutting in while I was talking.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-125',
    word_or_phrase: 'Cut off',
    meaning: 'To disconnect or to stop providing something.',
    example_sentence: 'Our water was cut off because we didn\'t pay the bill.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-126',
    word_or_phrase: 'Do away with',
    meaning: 'To discard or end something.',
    example_sentence: 'The government should do away with that old law.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-127',
    word_or_phrase: 'Dress up',
    meaning: 'To wear nice clothing.',
    example_sentence: 'We need to dress up for the wedding.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-128',
    word_or_phrase: 'Drop in',
    meaning: 'To visit unexpectedly.',
    example_sentence: 'Feel free to drop in whenever you are in town.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-129',
    word_or_phrase: 'End up',
    meaning: 'To eventually reach a state or place.',
    example_sentence: 'We got lost and ended up in a different city.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-130',
    word_or_phrase: 'Fall apart',
    meaning: 'To break into pieces or to fail.',
    example_sentence: 'The old book just fell apart in my hands.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-131',
    word_or_phrase: 'Fall out',
    meaning: 'To have an argument and stop being friends.',
    example_sentence: 'They fell out over a silly misunderstanding.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-132',
    word_or_phrase: 'Figure out',
    meaning: 'To understand or find a solution.',
    example_sentence: 'I can\'t figure out how to use this printer.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-133',
    word_or_phrase: 'Fill out',
    meaning: 'To complete a form.',
    example_sentence: 'Please fill out this application form.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-134',
    word_or_phrase: 'Find out',
    meaning: 'To discover information.',
    example_sentence: 'I need to find out what time the movie starts.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-135',
    word_or_phrase: 'Get across',
    meaning: 'To communicate clearly.',
    example_sentence: 'He struggled to get his point across.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-136',
    word_or_phrase: 'Get along',
    meaning: 'To have a good relationship.',
    example_sentence: 'Do you get along with your sister?',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-137',
    word_or_phrase: 'Get around to',
    meaning: 'To finally do something.',
    example_sentence: 'I finally got around to painting the fence.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-138',
    word_or_phrase: 'Get away with',
    meaning: 'To do something wrong without being punished.',
    example_sentence: 'He thought he could get away with cheating.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-139',
    word_or_phrase: 'Get back at',
    meaning: 'To take revenge on someone.',
    example_sentence: 'She wanted to get back at him for the prank.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-140',
    word_or_phrase: 'Get over',
    meaning: 'To recover from something difficult.',
    example_sentence: 'It took him a long time to get over the flu.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-141',
    word_or_phrase: 'Give in',
    meaning: 'To stop resisting or to submit.',
    example_sentence: 'The company finally gave in to the workers\' demands.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-142',
    word_or_phrase: 'Give up',
    meaning: 'To quit doing something.',
    example_sentence: 'Don\'t give up on your dreams.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-143',
    word_or_phrase: 'Go over',
    meaning: 'To review or check.',
    example_sentence: 'Let\'s go over the plan one more time.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-144',
    word_or_phrase: 'Grow apart',
    meaning: 'To become less close over time.',
    example_sentence: 'We grew apart after we moved to different cities.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-145',
    word_or_phrase: 'Grow up',
    meaning: 'To become an adult.',
    example_sentence: 'What do you want to be when you grow up?',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-146',
    word_or_phrase: 'Hand in',
    meaning: 'To submit something.',
    example_sentence: 'Please hand in your assignments by Friday.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-147',
    word_or_phrase: 'Hang in',
    meaning: 'To stay positive in a difficult situation.',
    example_sentence: 'Hang in there, things will get better.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-148',
    word_or_phrase: 'Hang out',
    meaning: 'To spend time relaxing.',
    example_sentence: 'We like to hang out at the mall.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-149',
    word_or_phrase: 'Hold back',
    meaning: 'To hide an emotion or to prevent progress.',
    example_sentence: 'She tried to hold back her tears.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-150',
    word_or_phrase: 'Keep on',
    meaning: 'To continue doing something.',
    example_sentence: 'Keep on working hard!',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-151',
    word_or_phrase: 'Let down',
    meaning: 'To disappoint someone.',
    example_sentence: 'I promise I won\'t let you down.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-152',
    word_or_phrase: 'Let in',
    meaning: 'To allow someone to enter.',
    example_sentence: 'Can you let the cat in?',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-153',
    word_or_phrase: 'Look after',
    meaning: 'To take care of.',
    example_sentence: 'I have to look after my little brother.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-154',
    word_or_phrase: 'Look down on',
    meaning: 'To think you are better than someone.',
    example_sentence: 'He looks down on people who haven\'t been to college.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-155',
    word_or_phrase: 'Look for',
    meaning: 'To search for.',
    example_sentence: 'I\'m looking for my lost wallet.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-156',
    word_or_phrase: 'Look forward to',
    meaning: 'To be excited about the future.',
    example_sentence: 'I\'m looking forward to the concert.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-157',
    word_or_phrase: 'Look up to',
    meaning: 'To admire someone.',
    example_sentence: 'I\'ve always looked up to my father.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-158',
    word_or_phrase: 'Make up for',
    meaning: 'To compensate for something.',
    example_sentence: 'I bought her flowers to make up for being late.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-159',
    word_or_phrase: 'Mix up',
    meaning: 'To confuse two or more things.',
    example_sentence: 'I always mix up their names.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-160',
    word_or_phrase: 'Pass out',
    meaning: 'To lose consciousness or to distribute something.',
    example_sentence: 'It was so hot that he passed out.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-161',
    word_or_phrase: 'Pay back',
    meaning: 'To return money that you owed.',
    example_sentence: 'I\'ll pay you back next week.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-162',
    word_or_phrase: 'Pick out',
    meaning: 'To choose.',
    example_sentence: 'She picked out a lovely dress for the party.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-163',
    word_or_phrase: 'Point out',
    meaning: 'To draw attention to something.',
    example_sentence: 'He pointed out the mistake in the report.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-164',
    word_or_phrase: 'Pull over',
    meaning: 'To stop a vehicle at the side of the road.',
    example_sentence: 'The police officer told him to pull over.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-165',
    word_or_phrase: 'Put away',
    meaning: 'To return something to its proper place.',
    example_sentence: 'Put your toys away before bedtime.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-166',
    word_or_phrase: 'Put off',
    meaning: 'To postpone or to make someone dislike something.',
    example_sentence: 'Don\'t put off until tomorrow what you can do today.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-167',
    word_or_phrase: 'Put out',
    meaning: 'To extinguish a fire or to publish something.',
    example_sentence: 'The firemen put out the fire quickly.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-168',
    word_or_phrase: 'Put up with',
    meaning: 'To tolerate.',
    example_sentence: 'I don\'t know how you put up with that noise.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-169',
    word_or_phrase: 'Run into',
    meaning: 'To meet someone unexpectedly.',
    example_sentence: 'I ran into an old friend at the supermarket.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-170',
    word_or_phrase: 'Run out of',
    meaning: 'To have none left.',
    example_sentence: 'We\'ve run out of milk.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-171',
    word_or_phrase: 'Send back',
    meaning: 'To return something.',
    example_sentence: 'The soup was cold, so I sent it back.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-172',
    word_or_phrase: 'Set up',
    meaning: 'To organize or establish something.',
    example_sentence: 'They set up a new business last year.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-173',
    word_or_phrase: 'Show off',
    meaning: 'To act in a way intended to attract attention.',
    example_sentence: 'He\'s always showing off his expensive car.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-174',
    word_or_phrase: 'Sit down',
    meaning: 'To take a seat.',
    example_sentence: 'Please sit down and make yourself comfortable.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-175',
    word_or_phrase: 'Sleep over',
    meaning: 'To stay at someone else\'s house for the night.',
    example_sentence: 'My niece is coming to sleep over this weekend.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-176',
    word_or_phrase: 'Sort out',
    meaning: 'To organize or resolve a problem.',
    example_sentence: 'We need to sort out our travel arrangements.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-177',
    word_or_phrase: 'Speak up',
    meaning: 'To speak louder or to express an opinion more clearly.',
    example_sentence: 'Could you speak up a little? I can\'t hear you.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-178',
    word_or_phrase: 'Stand up',
    meaning: 'To rise from a sitting position.',
    example_sentence: 'Everyone stood up when the judge entered.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-179',
    word_or_phrase: 'Stay up',
    meaning: 'To not go to bed.',
    example_sentence: 'I stayed up late to watch the game.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-180',
    word_or_phrase: 'Take after',
    meaning: 'To resemble a member of your family.',
    example_sentence: 'He takes after his mother with those blue eyes.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-181',
    word_or_phrase: 'Take apart',
    meaning: 'To separate something into its component parts.',
    example_sentence: 'He took the clock apart to see how it worked.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-182',
    word_or_phrase: 'Take back',
    meaning: 'To return an item to a store or to retract a statement.',
    example_sentence: 'I had to take the shirt back because it didn\'t fit.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-183',
    word_or_phrase: 'Take off',
    meaning: 'To remove clothing or for a plane to leave the ground.',
    example_sentence: 'The plane took off on time.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-184',
    word_or_phrase: 'Take out',
    meaning: 'To remove something from a place or to go on a date with someone.',
    example_sentence: 'He took his girlfriend out for dinner.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-185',
    word_or_phrase: 'Think over',
    meaning: 'To consider something carefully.',
    example_sentence: 'I need some time to think over your offer.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-186',
    word_or_phrase: 'Throw away',
    meaning: 'To discard something.',
    example_sentence: 'Don\'t throw away those old newspapers.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-187',
    word_or_phrase: 'Try on',
    meaning: 'To put on clothing to see if it fits.',
    example_sentence: 'You should try on the shoes before you buy them.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-188',
    word_or_phrase: 'Try out',
    meaning: 'To test something.',
    example_sentence: 'I\'m going to try out the new gym tomorrow.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-189',
    word_or_phrase: 'Turn down',
    meaning: 'To reduce the volume or to refuse an offer.',
    example_sentence: 'She turned down the job because of the long commute.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-190',
    word_or_phrase: 'Turn off',
    meaning: 'To stop a machine or flow.',
    example_sentence: 'Turn off the lights when you leave.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-191',
    word_or_phrase: 'Turn up',
    meaning: 'To increase the volume or to appear unexpectedly.',
    example_sentence: 'He turned up at the party without an invitation.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-192',
    word_or_phrase: 'Use up',
    meaning: 'To finish a supply of something.',
    example_sentence: 'We\'ve used up all the butter.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-193',
    word_or_phrase: 'Wait on',
    meaning: 'To serve someone in a restaurant.',
    example_sentence: 'She waits on tables at a local cafe.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-194',
    word_or_phrase: 'Warm up',
    meaning: 'To prepare for exercise or to become friendlier.',
    example_sentence: 'It\'s important to warm up before you run.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-195',
    word_or_phrase: 'Watch out',
    meaning: 'To be careful.',
    example_sentence: 'Watch out for the icy patches on the sidewalk.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-196',
    word_or_phrase: 'Wear off',
    meaning: 'To gradually disappear.',
    example_sentence: 'The effects of the medicine are wearing off.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-197',
    word_or_phrase: 'Wear out',
    meaning: 'To become unusable through long use or to feel very tired.',
    example_sentence: 'I\'ve worn out these shoes.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-198',
    word_or_phrase: 'Work out',
    meaning: 'To exercise or to solve a problem.',
    example_sentence: 'I try to work out at least three times a week.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-199',
    word_or_phrase: 'Write down',
    meaning: 'To record information on paper.',
    example_sentence: 'Write down your phone number, please.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-200',
    word_or_phrase: 'Act up',
    meaning: 'To behave badly or malfunction.',
    example_sentence: 'My computer is acting up again.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-201',
    word_or_phrase: 'Add up',
    meaning: 'To make sense or to accumulate.',
    example_sentence: 'His story just doesn\'t add up.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-202',
    word_or_phrase: 'Back down',
    meaning: 'To admit you are wrong or to stop defending an opinion.',
    example_sentence: 'Neither side was willing to back down.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-203',
    word_or_phrase: 'Back out',
    meaning: 'To decide not to do something you previously agreed to.',
    example_sentence: 'He backed out of the deal at the last minute.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-204',
    word_or_phrase: 'Bear with',
    meaning: 'To be patient with someone.',
    example_sentence: 'Please bear with me while I find the file.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-205',
    word_or_phrase: 'Beef up',
    meaning: 'To strengthen or improve something.',
    example_sentence: 'The company is beefing up its security.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-206',
    word_or_phrase: 'Bite off more than you can chew',
    meaning: 'To take on a task that is too big.',
    example_sentence: 'He bit off more than he could chew with that new project.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-207',
    word_or_phrase: 'Blow over',
    meaning: 'To pass without having a serious effect.',
    example_sentence: 'The scandal will soon blow over.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-208',
    word_or_phrase: 'Brush up on',
    meaning: 'To improve your knowledge of something you used to know.',
    example_sentence: 'I need to brush up on my French before our trip to Paris.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-209',
    word_or_phrase: 'Check off',
    meaning: 'To mark items on a list as completed.',
    example_sentence: 'She checked off each task as she finished it.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-210',
    word_or_phrase: 'Cheer up',
    meaning: 'To make someone feel happier.',
    example_sentence: 'I bought her some chocolate to cheer her up.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-211',
    word_or_phrase: 'Chop up',
    meaning: 'To cut something into small pieces.',
    example_sentence: 'Can you chop up some onions for the soup?',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-212',
    word_or_phrase: 'Clam up',
    meaning: 'To suddenly stop talking, usually because of nervousness.',
    example_sentence: 'He clams up whenever he has to speak in public.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-213',
    word_or_phrase: 'Clamp down on',
    meaning: 'To take strong action to stop or limit something.',
    example_sentence: 'The police are clamping down on speeding.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-214',
    word_or_phrase: 'Clear out',
    meaning: 'To empty a place or to leave a place quickly.',
    example_sentence: 'We need to clear out the garage this weekend.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-215',
    word_or_phrase: 'Close down',
    meaning: 'To stop operating (a business).',
    example_sentence: 'Many local shops have closed down recently.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-216',
    word_or_phrase: 'Come by',
    meaning: 'To visit someone or to obtain something.',
    example_sentence: 'How did you come by such a rare coin?',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-217',
    word_or_phrase: 'Come down with',
    meaning: 'To become ill with a common disease.',
    example_sentence: 'I think I\'m coming down with a cold.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-218',
    word_or_phrase: 'Come into',
    meaning: 'To inherit money or property.',
    example_sentence: 'She came into a lot of money when her grandfather died.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-219',
    word_or_phrase: 'Come up',
    meaning: 'To be mentioned or to occur unexpectedly.',
    example_sentence: 'Something unexpected has come up, so I can\'t make it.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-220',
    word_or_phrase: 'Crack down on',
    meaning: 'To start enforcing rules more strictly.',
    example_sentence: 'The city is cracking down on illegal parking.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-221',
    word_or_phrase: 'Cut out',
    meaning: 'To stop doing something or to remove something by cutting.',
    example_sentence: 'I\'ve decided to cut out fried foods from my diet.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-222',
    word_or_phrase: 'Die down',
    meaning: 'To gradually become less strong or loud.',
    example_sentence: 'Wait for the noise to die down before you start.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-223',
    word_or_phrase: 'Do up',
    meaning: 'To fasten something or to renovate a building.',
    example_sentence: 'Can you help me do up my dress?',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-224',
    word_or_phrase: 'Drag on',
    meaning: 'To last longer than expected or desired.',
    example_sentence: 'The meeting dragged on for over three hours.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-225',
    word_or_phrase: 'Draw up',
    meaning: 'To prepare a document or plan.',
    example_sentence: 'The lawyer will draw up the contract.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-226',
    word_or_phrase: 'Dream up',
    meaning: 'To invent an unusual or silly idea or plan.',
    example_sentence: 'Who dreamed up this crazy scheme?',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-227',
    word_or_phrase: 'Drop off',
    meaning: 'To take someone to a place and leave them there, or to fall asleep.',
    example_sentence: 'I can drop you off at the station.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-228',
    word_or_phrase: 'Eat out',
    meaning: 'To eat at a restaurant.',
    example_sentence: 'Let\'s eat out tonight.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-229',
    word_or_phrase: 'Face up to',
    meaning: 'To accept and deal with a difficult situation.',
    example_sentence: 'You need to face up to your responsibilities.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-230',
    word_or_phrase: 'Fall behind',
    meaning: 'To fail to keep up with others.',
    example_sentence: 'He fell behind in his studies after he was sick.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-231',
    word_or_phrase: 'Fall through',
    meaning: 'To fail to happen (a plan or deal).',
    example_sentence: 'The sale of the house fell through because of the survey.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-232',
    word_or_phrase: 'Feel up to',
    meaning: 'To feel strong or healthy enough to do something.',
    example_sentence: 'I don\'t really feel up to going out tonight.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-233',
    word_or_phrase: 'Fiddle around with',
    meaning: 'To spend time making small changes to something.',
    example_sentence: 'He\'s been fiddling around with that radio for hours.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-234',
    word_or_phrase: 'Follow through',
    meaning: 'To complete an action or plan.',
    example_sentence: 'You should follow through on your promise.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-235',
    word_or_phrase: 'Get by',
    meaning: 'To manage with minimum resources.',
    example_sentence: 'We can just about get by on my salary.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-236',
    word_or_phrase: 'Give off',
    meaning: 'To produce a smell, light, or heat.',
    example_sentence: 'The flowers gave off a lovely scent.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-237',
    word_or_phrase: 'Go ahead with',
    meaning: 'To start a plan or action.',
    example_sentence: 'They decided to go ahead with the project.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-238',
    word_or_phrase: 'Go through with',
    meaning: 'To do something you have planned or agreed to.',
    example_sentence: 'He decided not to go through with the wedding.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-239',
    word_or_phrase: 'Hand out',
    meaning: 'To distribute something.',
    example_sentence: 'The teacher handed out the exam papers.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-240',
    word_or_phrase: 'Hold on',
    meaning: 'To wait or to grip something firmly.',
    example_sentence: 'Hold on a minute, I\'m not ready yet.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-241',
    word_or_phrase: 'Keep up with',
    meaning: 'To stay at the same level as someone else.',
    example_sentence: 'It\'s hard to keep up with the latest fashion.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-242',
    word_or_phrase: 'Lead up to',
    meaning: 'To happen immediately before an event.',
    example_sentence: 'The events leading up to the war were complex.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-243',
    word_or_phrase: 'Look into',
    meaning: 'To investigate something.',
    example_sentence: 'We are looking into the cause of the problem.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-244',
    word_or_phrase: 'Make off with',
    meaning: 'To steal something and take it away.',
    example_sentence: 'The thieves made off with all the jewelry.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-245',
    word_or_phrase: 'Own up to',
    meaning: 'To admit you have done something wrong.',
    example_sentence: 'He finally owned up to the mistake.',
    category: 'phrasal verbs',
    difficulty: 'intermediate'
  },
  {
    id: 'pv-246',
    word_or_phrase: 'Pass away',
    meaning: 'To die (polite expression).',
    example_sentence: 'His grandmother passed away last night.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-247',
    word_or_phrase: 'Pick up',
    meaning: 'To collect someone or something.',
    example_sentence: 'I\'ll pick you up at 8 o\'clock.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-248',
    word_or_phrase: 'Put in',
    meaning: 'To install something or to spend time doing something.',
    example_sentence: 'He put in a new kitchen last summer.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-249',
    word_or_phrase: 'Run over',
    meaning: 'To explain something quickly or to hit with a vehicle.',
    example_sentence: 'Let me run over the main points again.',
    category: 'phrasal verbs',
    difficulty: 'beginner'
  },
  {
    id: 'pv-250',
    word_or_phrase: 'Set off',
    meaning: 'To start a journey.',
    example_sentence: 'We set off early in the morning.',
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
  },
  {
    id: 'sl-108',
    word_or_phrase: 'Bussin',
    meaning: 'Describes food that is especially delicious.',
    example_sentence: 'Man, these street tacos are straight bussin!',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-109',
    word_or_phrase: 'Caught in 4K',
    meaning: 'Caught someone doing something wrong with clear evidence.',
    example_sentence: 'He tried to deny it, but they caught him in 4K on the doorbell cam.',
    category: 'slang words',
    difficulty: 'intermediate'
  },
  {
    id: 'sl-110',
    word_or_phrase: 'Main character energy',
    meaning: 'Behaving like the protagonist of one\'s own life, often in a confident or stylish way.',
    example_sentence: 'She walked into the room with serious main character energy.',
    category: 'slang words',
    difficulty: 'intermediate'
  },
  {
    id: 'sl-111',
    word_or_phrase: 'Understood the assignment',
    meaning: 'Describes someone who did exactly what was required or expected, often exceeding it.',
    example_sentence: 'Her outfit for the Met Gala was perfect; she understood the assignment.',
    category: 'slang words',
    difficulty: 'intermediate'
  },
  {
    id: 'sl-112',
    word_or_phrase: 'On god',
    meaning: 'Used to emphasize that someone is telling the truth (similar to "I swear").',
    example_sentence: 'I didn\'t take your phone, on god.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-113',
    word_or_phrase: 'Finna',
    meaning: 'Contraction of "fixing to"; about to do something.',
    example_sentence: 'I\'m finna go to the store, you need anything?',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-114',
    word_or_phrase: 'Highkey',
    meaning: 'Obvious or intense; used to express something openly.',
    example_sentence: 'I highkey want to quit my job and travel.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-115',
    word_or_phrase: 'Lowkey',
    meaning: 'Subtle or secret; used to express something quietly or modestly.',
    example_sentence: 'I lowkey think he\'s cute, but don\'t tell anyone.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-116',
    word_or_phrase: 'Rent free',
    meaning: 'Used when someone or something is constantly on your mind.',
    example_sentence: 'That song has been living rent free in my head all day.',
    category: 'slang words',
    difficulty: 'intermediate'
  },
  {
    id: 'sl-117',
    word_or_phrase: 'Situationship',
    meaning: 'A romantic relationship that is undefined or complicated.',
    example_sentence: 'We\'ve been in a situationship for six months and I\'m over it.',
    category: 'slang words',
    difficulty: 'intermediate'
  },
  {
    id: 'sl-118',
    word_or_phrase: 'Soft launch',
    meaning: 'Subtly announcing a new relationship on social media without showing the partner\'s face.',
    example_sentence: 'She did a soft launch on Instagram with a photo of two coffee cups.',
    category: 'slang words',
    difficulty: 'intermediate'
  },
  {
    id: 'sl-119',
    word_or_phrase: 'Valid',
    meaning: 'Describes something that is good, cool, or acceptable.',
    example_sentence: 'That new album is actually valid.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-120',
    word_or_phrase: 'Vibe check',
    meaning: 'Assessing someone\'s energy or the atmosphere of a situation.',
    example_sentence: 'The party passed the vibe check within five minutes.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-121',
    word_or_phrase: 'Ate',
    meaning: 'Did something extremely well.',
    example_sentence: 'She ate that performance! Best of the night.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-122',
    word_or_phrase: 'Left no crumbs',
    meaning: 'Did something so well that there was nothing left to improve (often used with "ate").',
    example_sentence: 'Her red carpet look ate and left no crumbs.',
    category: 'slang words',
    difficulty: 'intermediate'
  },
  {
    id: 'sl-123',
    word_or_phrase: 'Slay',
    meaning: 'To do something exceptionally well or to look great.',
    example_sentence: 'You slay in that dress!',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-124',
    word_or_phrase: 'Sus',
    meaning: 'Short for suspicious; used when someone is acting strangely.',
    example_sentence: 'He\'s being real sus today, I wonder what he\'s hiding.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-125',
    word_or_phrase: 'Bet',
    meaning: 'Used to express agreement or as a challenge (similar to "Okay" or "Watch me").',
    example_sentence: 'Wanna race? Bet.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-126',
    word_or_phrase: 'Bruh',
    meaning: 'Used to express frustration, shock, or disbelief.',
    example_sentence: 'Bruh, you really just dropped my phone.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-127',
    word_or_phrase: 'Cap',
    meaning: 'A lie.',
    example_sentence: 'That\'s cap, you never did that.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-128',
    word_or_phrase: 'Drip',
    meaning: 'High-quality style or fashion.',
    example_sentence: 'Check out his drip; those shoes are fire.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-129',
    word_or_phrase: 'Fire',
    meaning: 'Extremely good, cool, or impressive.',
    example_sentence: 'This new beat is fire.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-130',
    word_or_phrase: 'Flex',
    meaning: 'To show off your accomplishments or possessions.',
    example_sentence: 'He\'s only buying that car as a flex.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-131',
    word_or_phrase: 'Ghosted',
    meaning: 'When someone suddenly stops communicating without explanation.',
    example_sentence: 'I thought the date went well, but then he ghosted me.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-132',
    word_or_phrase: 'Gucci',
    meaning: 'Good, cool, or fine.',
    example_sentence: 'Don\'t worry about the spilled water, it\'s all Gucci.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-133',
    word_or_phrase: 'In my feels',
    meaning: 'Being very emotional or sentimental.',
    example_sentence: 'That movie really got me in my feels.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-134',
    word_or_phrase: 'Iykyk',
    meaning: 'Acronym for "If you know, you know."',
    example_sentence: 'Best pizza spot in Brooklyn. Iykyk.',
    category: 'slang words',
    difficulty: 'intermediate'
  },
  {
    id: 'sl-135',
    word_or_phrase: 'L',
    meaning: 'Loss; used when someone fails or experiences something bad.',
    example_sentence: 'Tough L, man. Better luck next time.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-136',
    word_or_phrase: 'Lit',
    meaning: 'Amazing, exciting, or high-energy.',
    example_sentence: 'The concert last night was so lit.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-137',
    word_or_phrase: 'Mood',
    meaning: 'Used to express that you relate to a situation or image.',
    example_sentence: 'Me sleeping all day is a total mood.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-138',
    word_or_phrase: 'Periodt',
    meaning: 'Used to emphasize the end of a statement; no more discussion.',
    example_sentence: 'This is the best burger in town, periodt.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-139',
    word_or_phrase: 'Pull up',
    meaning: 'To arrive at a location, often to hang out.',
    example_sentence: 'Just pull up to the crib whenever you\'re ready.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-140',
    word_or_phrase: 'Rizz',
    meaning: 'Short for charisma; ability to attract a romantic partner.',
    example_sentence: 'He\'s got so much rizz, he can talk to anyone.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-141',
    word_or_phrase: 'Savage',
    meaning: 'Someone who is fearless or brutally honest.',
    example_sentence: 'That comeback was savage!',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-142',
    word_or_phrase: 'Ship',
    meaning: 'To support a romantic relationship between two people.',
    example_sentence: 'I totally ship those two characters.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-143',
    word_or_phrase: 'Shook',
    meaning: 'Extremely shocked or surprised.',
    example_sentence: 'I was shook when I saw the plot twist.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-144',
    word_or_phrase: 'Simp',
    meaning: 'Someone who does way too much for a person they like.',
    example_sentence: 'He\'s such a simp for her, he buys her everything.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-145',
    word_or_phrase: 'Stan',
    meaning: 'An overzealous or obsessive fan of a celebrity.',
    example_sentence: 'I\'m a total Beyonce stan.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-146',
    word_or_phrase: 'Tea',
    meaning: 'Gossip.',
    example_sentence: 'Come over later and spill the tea.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-147',
    word_or_phrase: 'Thirsty',
    meaning: 'Desperate for attention or approval.',
    example_sentence: 'She\'s being real thirsty with those selfies.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-148',
    word_or_phrase: 'W',
    meaning: 'Win; used when something good happens.',
    example_sentence: 'That\'s a huge W for the team.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-149',
    word_or_phrase: 'Yeet',
    meaning: 'To throw something with force or an exclamation of excitement.',
    example_sentence: 'He just yeeted his phone across the room.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-150',
    word_or_phrase: 'Zig',
    meaning: 'To move suddenly or change direction (often used figuratively).',
    example_sentence: 'Just when I thought I knew his plan, he zigged.',
    category: 'slang words',
    difficulty: 'intermediate'
  },
  {
    id: 'sl-151',
    word_or_phrase: 'Basic',
    meaning: 'Mainstream or unoriginal.',
    example_sentence: 'Liking pumpkin spice lattes is so basic.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-152',
    word_or_phrase: 'Boujee',
    meaning: 'High-class or fancy, but often in a pretentious way.',
    example_sentence: 'She\'s so boujee, she only drinks imported water.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-153',
    word_or_phrase: 'Dead',
    meaning: 'Used when something is extremely funny.',
    example_sentence: 'I am dead! That meme is hilarious.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-154',
    word_or_phrase: 'Extra',
    meaning: 'Over-the-top or dramatic behavior.',
    example_sentence: 'He\'s so extra, he wearing a tuxedo to a backyard BBQ.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-155',
    word_or_phrase: 'Fam',
    meaning: 'Close friends who are like family.',
    example_sentence: 'What\'s up, fam?',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-156',
    word_or_phrase: 'Fomno',
    meaning: 'Fear of missing out.',
    example_sentence: 'I have serious FOMO looking at their vacation photos.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-157',
    word_or_phrase: 'Glow up',
    meaning: 'A significant transformation or improvement in appearance or life.',
    example_sentence: 'Her glow up since high school is incredible.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-158',
    word_or_phrase: 'Gucci',
    meaning: 'Good, fine, or cool.',
    example_sentence: 'Everything is gucci between us now.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-159',
    word_or_phrase: 'Hits different',
    meaning: 'Describes something that is uniquely impressive or emotional.',
    example_sentence: 'That morning coffee just hits different when you\'re on vacation.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-160',
    word_or_phrase: 'I\'m weak',
    meaning: 'Used to say that something is extremely funny.',
    example_sentence: 'Did you see that video? I\'m weak!',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-161',
    word_or_phrase: 'Jit',
    meaning: 'A younger person, often used in a derogatory or casual way (mostly Florida slang).',
    example_sentence: 'The little jit tried to jump the fence.',
    category: 'slang words',
    difficulty: 'intermediate'
  },
  {
    id: 'sl-162',
    word_or_phrase: 'Kick rocks',
    meaning: 'Telling someone to go away or leave you alone.',
    example_sentence: 'If you don\'t like how I do things, you can kick rocks.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-163',
    word_or_phrase: 'Lewk',
    meaning: 'A signature or carefully curated fashion look.',
    example_sentence: 'She is serving a major lewk today.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-164',
    word_or_phrase: 'Living my best life',
    meaning: 'Focusing on one\'s own happiness and success.',
    example_sentence: 'I\'m at the beach, living my best life.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-165',
    word_or_phrase: 'Main',
    meaning: 'Your primary romantic partner or best friend.',
    example_sentence: 'That\'s my main right there.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-166',
    word_or_phrase: 'No cap',
    meaning: 'Telling the truth; for real.',
    example_sentence: 'I just met Lebron James, no cap!',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-167',
    word_or_phrase: 'Not the [something]',
    meaning: 'Used to express shock or disapproval about a specific detail.',
    example_sentence: 'Not the crocs with socks!',
    category: 'slang words',
    difficulty: 'intermediate'
  },
  {
    id: 'sl-168',
    word_or_phrase: 'Out of pocket',
    meaning: 'Behaving inappropriately or wildly; or unavailable.',
    example_sentence: 'That joke he made was totally out of pocket.',
    category: 'slang words',
    difficulty: 'intermediate'
  },
  {
    id: 'sl-169',
    word_or_phrase: 'Opp',
    meaning: 'Short for opposition; an enemy or rival.',
    example_sentence: 'Keep your eyes open, the opps are everywhere.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-170',
    word_or_phrase: 'Plug',
    meaning: 'Someone who can provide something (often illegal or hard to get).',
    example_sentence: 'My plug for tickets just came through.',
    category: 'slang words',
    difficulty: 'intermediate'
  },
  {
    id: 'sl-171',
    word_or_phrase: 'Pull up',
    meaning: 'To arrive at a place.',
    example_sentence: 'Pull up to the party later!',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-172',
    word_or_phrase: 'Purr',
    meaning: 'An exclamation of approval or "it\'s giving what it\'s supposed to give."',
    example_sentence: 'You look amazing, purr!',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-173',
    word_or_phrase: 'Receipts',
    meaning: 'Evidence or proof of a claim (usually screenshots).',
    example_sentence: 'He said he didn\'t say it, but I have the receipts.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-174',
    word_or_phrase: 'Salty',
    meaning: 'Bitter or upset over something minor.',
    example_sentence: 'He\'s just salty because I beat him at FIFA.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-175',
    word_or_phrase: 'Sending me',
    meaning: 'Used when something is extremely funny.',
    example_sentence: 'This meme is literally sending me.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-176',
    word_or_phrase: 'Shade',
    meaning: 'Subtle disrespect or "throwing shade."',
    example_sentence: 'She was throwing some serious shade at the meeting.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-177',
    word_or_phrase: 'Shipping',
    meaning: 'Supporting a romantic relationship between two people.',
    example_sentence: 'I\'m totally shipping them!',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-178',
    word_or_phrase: 'Situationship',
    meaning: 'A romantic relationship that lacks clear definitions.',
    example_sentence: 'It\'s not a relationship, it\'s a situationship.',
    category: 'slang words',
    difficulty: 'intermediate'
  },
  {
    id: 'sl-179',
    word_or_phrase: 'Slaps',
    meaning: 'Describes music that is exceptionally good.',
    example_sentence: 'This new beat slaps!',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-180',
    word_or_phrase: 'Snatched',
    meaning: 'Looking very good or fashionable; or a tight figure.',
    example_sentence: 'Her waist is snatched in that dress.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-181',
    word_or_phrase: 'Spill the tea',
    meaning: 'To share gossip.',
    example_sentence: 'Come over and spill the tea about the cruise!',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-182',
    word_or_phrase: 'Stan',
    meaning: 'An obsessive fan.',
    example_sentence: 'I\'m a total Nicki Minaj stan.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-183',
    word_or_phrase: 'Sus',
    meaning: 'Short for suspicious or suspect.',
    example_sentence: 'He\'s been acting really sus lately.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-184',
    word_or_phrase: 'Take the L',
    meaning: 'Accepting a loss or defeat.',
    example_sentence: 'Just take the L and move on, man.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-185',
    word_or_phrase: 'Tea',
    meaning: 'Gossip or personal information.',
    example_sentence: 'What\'s the tea on the new office intern?',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-186',
    word_or_phrase: 'The girls that get it, get it',
    meaning: 'Used to describe a niche or specific vibe that only certain people understand.',
    example_sentence: 'It\'s a vintage look; the girls that get it, get it.',
    category: 'slang words',
    difficulty: 'intermediate'
  },
  {
    id: 'sl-187',
    word_or_phrase: 'Thirsty',
    meaning: 'Desperate for attention or approval.',
    example_sentence: 'Posting that many selfies is just thirsty.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-188',
    word_or_phrase: 'Touch grass',
    meaning: 'Telling someone they spend too much time online and need to disconnect.',
    example_sentence: 'You\'ve been arguing on Twitter for 5 hours. Go touch grass.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-189',
    word_or_phrase: 'Understood the assignment',
    meaning: 'Exceeded expectations or hit the mark perfectly.',
    example_sentence: 'Her red carpet dress was incredible; she understood the assignment.',
    category: 'slang words',
    difficulty: 'intermediate'
  },
  {
    id: 'sl-190',
    word_or_phrase: 'Valid',
    meaning: 'Acceptable, good, or cool.',
    example_sentence: 'That opinion is actually valid.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-191',
    word_or_phrase: 'Vibe',
    meaning: 'The atmospheric quality or emotional state.',
    example_sentence: 'This place has a great vibe.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-192',
    word_or_phrase: 'Vibe check',
    meaning: 'Checking in on a situation or person\'s energy.',
    example_sentence: 'Walked in and gave everyone a vibe check.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-193',
    word_or_phrase: 'We outside',
    meaning: 'Used to say that people are out having fun or being active.',
    example_sentence: 'Summer is here, we outside!',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-194',
    word_or_phrase: 'Wig',
    meaning: 'Expression used when something is so good it "made your wig fly off."',
    example_sentence: 'That performance was incredible. Wig!',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-195',
    word_or_phrase: 'Woke',
    meaning: 'Socially and politically aware.',
    example_sentence: 'It\'s important to stay woke.',
    category: 'slang words',
    difficulty: 'intermediate'
  },
  {
    id: 'sl-196',
    word_or_phrase: 'Yeet',
    meaning: 'To throw something forcefully; or an exclamation of excitement.',
    example_sentence: 'I\'m gonna yeet this trash into the bin.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-197',
    word_or_phrase: 'You good?',
    meaning: 'A casual way of asking "How are you?" or "Is everything okay?"',
    example_sentence: 'You just tripped. You good?',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-198',
    word_or_phrase: 'Zesty',
    meaning: 'Lively, energetic, or sometimes used for someone being slightly extra.',
    example_sentence: 'His personality is so zesty and fun.',
    category: 'slang words',
    difficulty: 'intermediate'
  },
  {
    id: 'sl-199',
    word_or_phrase: 'Bae',
    meaning: 'Before Anyone Else; a term of endearment.',
    example_sentence: 'I\'m hanging out with bae tonight.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-200',
    word_or_phrase: 'Fam',
    meaning: 'Close friends or family.',
    example_sentence: 'What\'s up, fam?',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-201',
    word_or_phrase: 'Finna',
    meaning: 'Fixing to; about to.',
    example_sentence: 'I\'m finna head out.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-202',
    word_or_phrase: 'Ghost',
    meaning: 'To stop communicating with someone without warning.',
    example_sentence: 'He just ghosted me after the first date.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-203',
    word_or_phrase: 'Lit',
    meaning: 'Exciting, amazing, or high energy.',
    example_sentence: 'The party last night was lit.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-204',
    word_or_phrase: 'Mood',
    meaning: 'Relatable.',
    example_sentence: 'That cat sleeping is such a mood.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-205',
    word_or_phrase: 'Oof',
    meaning: 'Exclamation of pain, surprise, or awkwardness.',
    example_sentence: 'Oof, that looks like it hurt.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-206',
    word_or_phrase: 'Periodt',
    meaning: 'Used to emphasize the end of a statement.',
    example_sentence: 'That\'s the best burger in town, periodt.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-207',
    word_or_phrase: 'Savage',
    meaning: 'Fierce, brutal, or honest in a cool way.',
    example_sentence: 'That comeback was savage.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-208',
    word_or_phrase: 'Simp',
    meaning: 'Someone who does way too much for a person they like.',
    example_sentence: 'He\'s such a simp for her, he buys her everything.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-209',
    word_or_phrase: 'Slay',
    meaning: 'To do something exceptionally well or to look great.',
    example_sentence: 'You slay in that dress!',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-210',
    word_or_phrase: 'Sliding into DMs',
    meaning: 'Sending a direct message to someone, often with romantic intent.',
    example_sentence: 'He tried sliding into her DMs after the party.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-211',
    word_or_phrase: 'Soft launch',
    meaning: 'Subtly announcing a new relationship on social media.',
    example_sentence: 'She did a soft launch on Instagram with a photo of two coffee cups.',
    category: 'slang words',
    difficulty: 'intermediate'
  },
  {
    id: 'sl-212',
    word_or_phrase: 'Squad goals',
    meaning: 'A term used to describe a friend group that others aspire to be like.',
    example_sentence: 'Their vacation photos are total squad goals.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-213',
    word_or_phrase: 'Stan',
    meaning: 'An overzealous fan.',
    example_sentence: 'I\'m a total Beyonce stan.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-214',
    word_or_phrase: 'Stay mad',
    meaning: 'Used to dismiss someone who is upset or complaining.',
    example_sentence: 'I\'m gonna keep doing me, so you can stay mad.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-215',
    word_or_phrase: 'Sus',
    meaning: 'Suspicious or questionable.',
    example_sentence: 'That deal sounds a bit sus to me.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-216',
    word_or_phrase: 'Tea',
    meaning: 'Gossip.',
    example_sentence: 'I have some major tea to spill.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-217',
    word_or_phrase: 'Thanks, I hate it',
    meaning: 'Used sarcastically to describe something unpleasant or unsettling.',
    example_sentence: 'A pizza with pineapples and pickles? Thanks, I hate it.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-218',
    word_or_phrase: 'The math isn\'t mathing',
    meaning: 'Something doesn\'t make sense or add up.',
    example_sentence: 'He says he was at home, but I saw him at the mall. The math isn\'t mathing.',
    category: 'slang words',
    difficulty: 'intermediate'
  },
  {
    id: 'sl-219',
    word_or_phrase: 'Thirsty',
    meaning: 'Desperate for attention.',
    example_sentence: 'He\'s so thirsty for likes on Instagram.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-220',
    word_or_phrase: 'Throw shade',
    meaning: 'To subtlety insult or disrespect someone.',
    example_sentence: 'She was throwing shade at him all night.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-221',
    word_or_phrase: 'Tight',
    meaning: 'Upset or angry; or close (as in friends).',
    example_sentence: 'He\'s still tight about losing the game.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-222',
    word_or_phrase: 'Understood the assignment',
    meaning: 'Did exactly what was needed or exceeded expectations.',
    example_sentence: 'Her outfit was perfect; she understood the assignment.',
    category: 'slang words',
    difficulty: 'intermediate'
  },
  {
    id: 'sl-223',
    word_or_phrase: 'Valid',
    meaning: 'Good, acceptable, or true.',
    example_sentence: 'That\'s a valid point.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-224',
    word_or_phrase: 'Vibe',
    meaning: 'The general feeling or energy of a person or place.',
    example_sentence: 'The vibe at the party was amazing.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-225',
    word_or_phrase: 'Vibe check',
    meaning: 'Evaluating the mood or energy.',
    example_sentence: 'Time for a vibe check!',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-226',
    word_or_phrase: 'W',
    meaning: 'Win; used to celebrate success.',
    example_sentence: 'We got the W today!',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-227',
    word_or_phrase: 'We outside',
    meaning: 'Out having fun and being social.',
    example_sentence: 'It\'s summer, we outside!',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-228',
    word_or_phrase: 'Wig',
    meaning: 'Expression of shock or amazement.',
    example_sentence: 'That plot twist was incredible. Wig!',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-229',
    word_or_phrase: 'Woke',
    meaning: 'Socially and politically conscious.',
    example_sentence: 'It important to stay woke.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-230',
    word_or_phrase: 'Yeet',
    meaning: 'To throw something with force.',
    example_sentence: 'He yeeted the football across the field.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-231',
    word_or_phrase: 'You good?',
    meaning: 'Are you okay? Or "How are you?"',
    example_sentence: 'You just fell down. You good?',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-232',
    word_or_phrase: 'Zero chill',
    meaning: 'Having no calmness or restraint.',
    example_sentence: 'He has zero chill when it comes to his favorite team.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-233',
    word_or_phrase: 'Zesty',
    meaning: 'Energetic or lively.',
    example_sentence: 'His performance was so zesty.',
    category: 'slang words',
    difficulty: 'intermediate'
  },
  {
    id: 'sl-234',
    word_or_phrase: 'Bussin',
    meaning: 'Tasting very good.',
    example_sentence: 'This pizza is bussin.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-235',
    word_or_phrase: 'Caught in 4k',
    meaning: 'Caught doing something wrong with clear evidence.',
    example_sentence: 'He tried to deny it, but they caught him in 4k.',
    category: 'slang words',
    difficulty: 'intermediate'
  },
  {
    id: 'sl-236',
    word_or_phrase: 'Cheugy',
    meaning: 'Trying too hard to be trendy or being outdated.',
    example_sentence: 'That outfit is so cheugy.',
    category: 'slang words',
    difficulty: 'intermediate'
  },
  {
    id: 'sl-237',
    word_or_phrase: 'Clout',
    meaning: 'Influence or fame, especially on social media.',
    example_sentence: 'He\'s just doing it for the clout.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-238',
    word_or_phrase: 'Dead',
    meaning: 'Something is extremely funny.',
    example_sentence: 'I am dead! That video was hilarious.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-239',
    word_or_phrase: 'Drip',
    meaning: 'Fashionable style.',
    example_sentence: 'Check out his drip.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-240',
    word_or_phrase: 'Extra',
    meaning: 'Being dramatic or over-the-top.',
    example_sentence: 'She is being so extra right now.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-241',
    word_or_phrase: 'Fire',
    meaning: 'Something that is really good or cool.',
    example_sentence: 'This song is fire.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-242',
    word_or_phrase: 'Flex',
    meaning: 'To show off.',
    example_sentence: 'Buying that car was a huge flex.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-243',
    word_or_phrase: 'Ghosted',
    meaning: 'When someone stops replying to messages.',
    example_sentence: 'I think she ghosted me.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-244',
    word_or_phrase: 'Glow up',
    meaning: 'A significant transformation for the better.',
    example_sentence: 'Her glow up was incredible.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-245',
    word_or_phrase: 'Gucci',
    meaning: 'Good or fine.',
    example_sentence: 'It\'s all gucci.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-246',
    word_or_phrase: 'Hits different',
    meaning: 'Feeling unique or more intense.',
    example_sentence: 'The rain hits different when you\'re inside.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-247',
    word_or_phrase: 'Iykyk',
    meaning: 'If you know, you know.',
    example_sentence: 'Best burger place in town. Iykyk.',
    category: 'slang words',
    difficulty: 'intermediate'
  },
  {
    id: 'sl-248',
    word_or_phrase: 'L',
    meaning: 'A loss.',
    example_sentence: 'Took an L on that test.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-249',
    word_or_phrase: 'Lit',
    meaning: 'Great or exciting.',
    example_sentence: 'The party was lit.',
    category: 'slang words',
    difficulty: 'beginner'
  },
  {
    id: 'sl-250',
    word_or_phrase: 'Main character energy',
    meaning: 'Acting like the protagonist of a story.',
    example_sentence: 'She has serious main character energy.',
    category: 'slang words',
    difficulty: 'intermediate'
  },
];
