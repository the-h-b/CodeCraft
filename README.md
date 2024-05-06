1. INTRODUCTION:

1.1. PURPOSE: 

	The goal of CodeCraft is to make learning to code easy and fun for everyone. It's an interactive website where users can drag and drop blocks of code to build programs. Whether the user is a beginner, a student, or someone teaching themselves, CodeCraft offers challenges and games to facilitate learning. The platform aims to make coding enjoyable and accessible to all, with a focus on ensuring the website works well, is safe, and is easy to use. 

1.2. SCOPE: 

	The scope of the CodeCraft project involves creating a user-friendly web app for teaching coding to beginners, students, and self-learners. Users can drag and drop code blocks to build programs in various languages. Key features include user registration, coding challenges, leaderboards, and progress tracking. The project aims for fast, scalable, and secure performance while considering optional features like code review and social media integration. The final product will be an enjoyable and educational platform that motivates users in their coding journey. 

2. USER TYPES AND THEIR FUNCTIONALITY:


1. BEGINNER CODERS: 

	Beginner coders are individuals who are new to coding. Their primary goal on the CodeCraft platform is to learn coding from scratch. 

They start by accessing simple tutorials and basic coding challenges. Beginner coders rely on guidance and structured learning paths to build their coding skills gradually. 

The platform provides clear instructions and interactive exercises to help them grasp fundamental concepts. 


2. COMPETITIVE CODERS: 

	Competitive coders are enthusiasts who enjoy coding challenges and competitions. They use the CodeCraft platform to hone their coding skills and compete with others. 

Competitive coders access a variety of advanced challenges and participate in timed contests. They seek opportunities to improve their problem-solving abilities and compare their performance on leaderboards. 

The platform offers challenging problems and real-time feedback to keep competitive coders engaged and motivated. 

3. SPECIFIC REQUIREMENTS


3.1. FUNCTIONAL REQUIREMENTS: 


1. User Registration and Authentication: Users should be able to create accounts with unique usernames to access the platform. Proper authentication mechanisms should be implemented to ensure user data security. 


2. Profile Management: Users should have the ability to customize their profiles according to their preferences. This includes options to update personal information, profile pictures, and other relevant details. 


3. Interactive Coding Environment: The platform should offer a user-friendly interface where users can drag-and-drop pre-existing code blocks to write programs. It should support multiple programming languages and allow users to modify and reorder code blocks seamlessly. 


4. Code Challenges: The system should provide a variety of coding challenges with different difficulty levels. Each challenge should come with clear instructions and defined success criteria to help users improve their coding skills progressively. 
5. Leaderboards: A leaderboard system should be implemented to showcase top performers based on their performance in completing coding challenges. This adds a competitive element to the platform and motivates users to excel. 


6. Progress Tracking: Users' progress should be tracked and analyzed to provide insights into their strengths and areas for improvement. Analytics should be provided to help users track their learning journey effectively. 


7. Notifications: The platform should send notifications to users for new challenges, achievements, or updates to keep them engaged and informed about relevant activities. 


8. Gamification: Gamification elements such as badges, rewards, and levels should be incorporated into the platform to make learning coding more engaging and motivating for users. 

3.2. DATABASE:

Utilize MongoDB for efficient and scalable data storage. 

3.3. DESIGN CONSTRAINTS:

Security is paramount to protect user data and prevent unauthorized access or data breaches. 

Reliability entails ensuring high system availability with minimal downtime for maintenance or unexpected failures. 
3.4. PERFORMANCE REQUIREMENTS
1. Performance: The platform should respond promptly to user actions, ensuring a smooth and seamless user experience. This involves optimizing code execution times, minimizing loading times for pages and resources. 

2. Scalability: The system should be designed to accommodate a growing number of users, challenges, and concurrent interactions. This requires implementing scalable architecture and technologies that can handle increased load without sacrificing performance or user experience. 

3. Reliability: High system availability is essential, with minimal downtime for maintenance or unexpected failures. Reliability entails implementing robust error handling and recovery mechanisms, ensuring data integrity, and regularly monitoring system health to detect and address any issues promptly. 

4. Compatibility: The platform should be compatible across different web browsers and devices to reach a wider audience. This involves testing and ensuring consistent behavior and performance across popular browsers and ensuring compatibility with various screen sizes and resolutions for optimal user experience. 

5. Security: Implementing secure coding practices is crucial to protect user data and prevent unauthorized access. This includes encryption of sensitive information, implementing user authentication and authorization mechanisms, and regularly updating security measures to address emerging threats and vulnerabilities. 

6. Backup and Recovery: Regularly backing up user data and system configurations is essential to prevent data loss and ensure continuity of service. Implementing reliable backup strategies and disaster recovery plans will help in restoring data and system functionality in case of unexpected events such as hardware failures or data breaches.
4. PROTOTYPING

1. Log-In Page: The login page of CodeBlock features a clean interface adorned with a minimalistic login form, ensuring a user-friendly experience. A prominent "Log-In" button stands out, facilitating seamless access to the platform. Complemented by an aesthetic dark background with subtle accents, the design offers a visually appealing and professional ambiance, enhancing user engagement and navigation efficiency.


2. Forgot Password Page: The "Forgot Password" page of CodeBlock features a clean and minimalistic interface, ensuring ease of use for users seeking password recovery. Emphasizing clarity, the page prominently displays the "userid" button, facilitating swift access to the recovery process. Complementing its functionality, the page adopts an aesthetic dark background adorned with subtle accents, enhancing visual appeal while maintaining focus on the task at hand.


3. Profile Page: The profile page of CodeBlock is designed to provide users with a comprehensive overview of their coding journey in a visually appealing and user-friendly manner. Key features include prominently displayed ELO ratings, sleek avatars for friends list, elegant icons showcasing achievements, and visually appealing presentation of basic statistics. This intuitive design enables users to track their progress and engage seamlessly with the platform's features, fostering a rewarding coding experience.


4. Coding Portal:  The coding page of CodeBlock features a grid layout showcasing a comprehensive list of challenges, each accompanied by its corresponding difficulty level and progress towards completion. Personalized recommendations are prominently highlighted to guide users through their coding journey. Additionally, a total progress bar offers a clear visual representation of the user's overall advancement, enhancing their experience on the platform.


5. Progress Tracker Page: The Progress Tracker page is designed to provide users with a comprehensive overview of their coding journey. Recent completed codes are showcased with clear result indicators, offering immediate feedback on performance. Total coding hours are prominently displayed, allowing users to track their dedication and progress over time. Engaging graphs visually depict coding milestones, enhancing the user experience by offering a dynamic representation of their achievements and growth. 


6. Settings Page: The Progress Tracker page boasts a streamlined interface, prioritizing clarity and functionality. With neatly organized settings options, users can effortlessly navigate and modify their basic profile data. Additionally, the inclusion of a dark mode toggle ensures adaptability to user preferences, enhancing readability and reducing eye strain for prolonged coding sessions.




PROTOTYPE – LOW FIEDLITY MODEL

Log-In/Sign-Up Page – ![image](https://github.com/the-h-b/CodeCraft/assets/129276639/04d54e74-b7dc-4f2b-88f6-fe704718df11)

 
Profile Page – ![image](https://github.com/the-h-b/CodeCraft/assets/129276639/ffdb82ab-b74e-4421-940a-572b6bda6f27)

 

Coding Page – ![image](https://github.com/the-h-b/CodeCraft/assets/129276639/8252b84b-8c39-4583-9be8-3924b362021c)

 
Progress Tracker – ![image](https://github.com/the-h-b/CodeCraft/assets/129276639/bb80e5aa-556f-44ec-804e-45f653c4ed6a)

 

Setting Page – ![image](https://github.com/the-h-b/CodeCraft/assets/129276639/c0de8028-5e99-4085-85af-32432fe7db9f)

 

5. IMPLEMENTATION OF SOFTWARE

 
1. HTML/CSS: Utilize HTML and CSS to structure and style the various pages of the website. Ensure responsiveness for different screen sizes. 



2. JavaScript: Implement client-side interactivity and dynamic elements using JavaScript. This includes form validation, dynamic content loading, and UI animations. 



3. Frameworks/Libraries: Consider using frontend frameworks like React.js to build reusable components and manage state efficiently. 



4. Dark Mode: Implement a dark mode feature using CSS variables or JavaScript to toggle between light and dark themes based on user preference. 



5. UI/UX Design: Pay close attention to the user interface and experience design, ensuring consistency, intuitiveness, and aesthetic appeal throughout the website. 



6. Responsive Design: Ensure that the website layout adapts seamlessly to various devices and screen sizes, providing an optimal viewing experience for users on desktops, tablets, and smartphones. 
