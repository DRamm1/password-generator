# Password-Generator
Live URL: https://dramm1.github.io/password-generator/

# Acceptacne Criteria
- GIVEN I need a new, secure password
- WHEN I click the button to generate a password
- THEN I am presented with a series of prompts for password criteria
- WHEN prompted for password criteria
- THEN I select which criteria to include in the password
- WHEN prompted for the length of the password
- THEN I choose a length of at least 8 characters and no more than 128 characters
- WHEN asked for character types to include in the password
- THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
- WHEN I answer each prompt
- THEN my input should be validated and at least one character type should be selected
- WHEN all prompts are answered
- THEN a password is generated that matches the selected criteria
- WHEN the password is generated
- THEN the password is either displayed in an alert or written to the page

# My page works as follows:
------------
1. Given the criteria, I made sure the generate button function upon click and thought I would make the button green vs red as green is often associated with security and the applications purpose is to produce a secure password.
2. Once the button is pressed prompts will appear asking for character preferences. Such as, length, whether or not to include symbols, uppercase letters, or lowercase letters. 
3. Once the length and at least one other criteria listed above are selected the program will then generate a password matching the users preferences and display in the box where it initially says “Your secure password”.
4. If no length or criteria are met the program will loop back, alert the user that they need to select length and at least one criteria presented, and then it will re-open the prompts to allow for criteria selection so the user doesn’t have to refresh the page or click the generate button again for convenience.
5. The application will only present selected criteria written to the page based on the response within the answered prompts to suit user preferences and meet proper customization/functionality criteria.
--------------------------------------

# How To Use:
To generate a password click the "generate password" button and input a length of atleast 8 characters and no more then 128 characters. After you have chosen your password length meet one of the following criteria.
- Choose whether or not to include numbers
- Choose whether or not to include symbols
- Choose whether or not to include Uppercase letters
- Choose whether or not to include Lowercase letters
------------------

# Screenshots and Images:
 All the below are numbered to match the order of the section "My page works as follows":
1. Program looks and green button:https://gyazo.com/15c7a836e6f9a478aca9616c32d54dbb
2. Character preferences:
 - Length:https://gyazo.com/5c06c86bbe8825b0baf91099bc165a57
 - Numbers:https://gyazo.com/afb6efee9b8f03c0a356150281a67f82
 - Symbols:https://gyazo.com/494099e70de9520ea358a8dd9aac5104
 - Uppercase letters:https://gyazo.com/25f79a61c787875349bec01c23ba8f22
 - Lowercase letters:https://gyazo.com/7191ad2c0a050fbc55aa1440185dfb11
3. Password display after criteria selection and generation: https://gyazo.com/8f8122c323c28130f9fb4afd664982cd
4. Alert:https://gyazo.com/b48584a7e8b97745d828bac1497b8e64
 - Re-Open prompt if no criteria is met:https://gyazo.com/5c06c86bbe8825b0baf91099bc165a57
5. Differnet Criteria outputs(All of the below links can also be combined in any fashion):
 - Symbols only:https://gyazo.com/a9120a7adea08077d27bdf7d1ddf7d24
 - Numbers only:https://gyazo.com/5c85f0f685c3991042f40d7e6dbe5865
 - Uppercase only:https://gyazo.com/d8dcdf275c0edf7bfd94dce28c5824a4
 - Lowercase only:https://gyazo.com/b6fafae90730fb811c68c6ff69ff2fda
 - Combination of all three:https://gyazo.com/531ffbc9cca954667cd02bb44092a6d6
------------------
 Additional Images and Information:

- GitHub Link:
https://github.com/DRamm1/password-generator
- Mock-Up
https://gyazo.com/0781b95ccc6c20359a38837c3726a03c

- Framework:
Javascript, HTML and CSS
