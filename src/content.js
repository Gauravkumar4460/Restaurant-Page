const homeContent = () => {
    const element = document.createElement('div');
    element.classList.add('home');
    const heading = document.createElement('h1');
    heading.classList.add('heading');

    const img = document.createElement('img');
    img.classList.add('honeyBee1Image');
    img.src= 'C:\\Users\\KIIT\\OneDrive\\Desktop\\FE projects\\restaurantPage\\src\\honeyBee1.jpeg';
    img.alt = 'No image';
    img.style.width = '50px';
    img.style.height = '50px';
    heading.appendChild(img);

    const text = document.createTextNode(`Beardy's Bar Restaurant`);
    heading.style.fontWeight = 'bold';
    heading.style.fontSize = '45px';
    heading.style.fontFamily= 'Potta One, cursive';
    heading.appendChild(text);
    const img2 = document.createElement('img');
    img2.classList.add('honeybee2Image');
    img2.src = 'C:\\Users\\KIIT\\OneDrive\\Desktop\\FE projects\\restaurantPage\\src\\honeyBee2.jpeg';
    img2.alt = 'No image';
    img2.style.width = '50px';
    img2.style.height = '50px';
    heading.appendChild(img2);

    element.appendChild(heading);

    const para1 = document.createElement('p');
    para1.classList.add('para1');
    para1.appendtext
    const imgCake1 = document.createElement('img');
    imgCake1.classList.add('imgCake1');
    imgCake1.src = 'C:\\Users\\KIIT\\OneDrive\\Desktop\\FE projects\\restaurantPage\\src\\cake1.jpeg';
    imgCake1.alt = 'No image';
    imgCake1.style.height = '50px';
    imgCake1.style.width = '50px';
    para1.appendChild(imgCake1);

    const imgCake2 = document.createElement('img');
    imgCake2.classList.add('imgCake2');
    imgCake2.src = 'C:\\Users\\KIIT\\OneDrive\\Desktop\\FE projects\\restaurantPage\\src\\cake2.jpeg';
    imgCake2.alt = 'No image';
    imgCake2.style.height = '50px';
    imgCake2.style.width = '50px';
    para1.appendChild(imgCake2);

    const lineBreak = document.createElement('br');
    para1.appendChild(lineBreak);
    const container = document.createElement('div');
    const para1Text = document.createTextNode(`Discover the magic of cake at Beardy's Restaurant, where every bite is a journey into deliciousness. Our cakes are crafted with the finest ingredients, bringing you an unparalleled taste experience.`);
    container.appendChild(para1Text);
    container.style.fontFamily = 'Brush Script MT, cursive';
    para1.appendChild(container);
   

    const space = document.createElement('span');
    space.innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
    para1.appendChild(space);
    
    const imgPizza = document.createElement('img');
    imgPizza.src = 'C:\\Users\\KIIT\\OneDrive\\Desktop\\FE projects\\restaurantPage\\src\\pizza.jpeg';
    imgPizza.alt = 'No image';
    imgPizza.style.height = '50px';
    imgPizza.style.width = '50px';
    para1.appendChild(imgPizza);

    const imgBurger = document.createElement('img');
    imgBurger.src  = 'C:\\Users\\KIIT\\OneDrive\\Desktop\\FE projects\\restaurantPage\\src\\burger.jpeg';
    imgBurger.alt = 'No image';
    imgBurger.style.height = '50px';
    imgBurger.style.width = '50px';
    para1.appendChild(imgBurger);

    element.appendChild(para1);
    
    const timingHeading = document.createElement('h2');
    timingHeading.innerHTML= 'Timing &nbsp;&nbsp;&nbsp;';
    timingHeading.fontWeight = 'bold';
    timingHeading.fontSize = '30px';
    timingHeading.fontFamily = 'Potta One, cursive';

    const timingImage = document.createElement('img');
    timingImage.src = 'C:\\Users\\KIIT\\OneDrive\\Desktop\\FE projects\\restaurantPage\\src\\opening timing.jpeg';
    timingImage.alt = 'No image';
    timingImage.style.height = '40px';
    timingImage.style.width = '40px';
    timingHeading.appendChild(timingImage);

    const para2 = document.createElement('ul');
    para2.classList.add('list');
    const listItemOfTiming = document.createElement('li');
    listItemOfTiming.appendChild(timingHeading);
    para2.appendChild(listItemOfTiming);
    para2.classList.add('para2');
    const listItem1 = document.createElement('li');
    listItem1.textContent = 'Monday: 08:00 AM - 10:00 PM';
    listItem1.style.fontWeight = 'bold';
    listItem1.style.fontFamily = 'Brush Script MT, cursive';
    para2.appendChild(listItem1);
    const listItem2 = document.createElement('li');
    listItem2.textContent = 'Tuesday: 08:00 AM - 10:00 PM';
    listItem2.style.fontWeight = 'bold';
    listItem2.style.fontFamily = 'Brush Script MT, cursive';
    para2.appendChild(listItem2);
    const listItem3 = document.createElement('li');
    listItem3.textContent = 'Wednesday: 08:00 AM - 10:00 PM';
    listItem3.style.fontWeight = 'bold';
    listItem3.style.fontFamily = 'Brush Script MT, cursive';
    para2.appendChild(listItem3);
    const listItem4 = document.createElement('li');
    listItem4.textContent = 'Thursday: 08:00 AM - 10:00 PM';
    listItem4.style.fontWeight = 'bold';
    listItem4.style.fontFamily = 'Brush Script MT, cursive';
    para2.appendChild(listItem4);
    const listItem5 = document.createElement('li');
    listItem5.textContent = 'Friday: 08:00 AM - 10:00 PM';
    listItem5.style.fontWeight = 'bold';
    listItem5.style.fontFamily = 'Brush Script MT, cursive';
    para2.appendChild(listItem5);
    const listItem6 = document.createElement('li');
    listItem6.textContent = 'Saturday: 10:00 AM - 11:59 PM';
    listItem6.style.fontWeight = 'bold';
    listItem6.style.fontFamily = 'Brush Script MT, cursive';
    para2.appendChild(listItem6);
    const listItem7 = document.createElement('li');
    listItem7.textContent = 'Sunday: 10:00 AM - 11:59 PM';
    listItem7.style.fontWeight = 'bold';
    listItem7.style.fontFamily = 'Brush Script MT, cursive';
    para2.appendChild(listItem7);
    element.appendChild(para2);

    const location = document.createElement('div');

    const locationHeading = document.createElement('h2');
    locationHeading.innerHTML = 'Location &nbsp;';
    locationHeading.style.fontFamily = 'Potta One, cursive';

    const locationImage = document.createElement('img');
    locationImage.src = 'C:\\Users\\KIIT\\OneDrive\\Desktop\\FE projects\\restaurantPage\\src\\location.jpeg';
    locationImage.alt = 'No image';
    locationImage.style.height = '40px';
    locationImage.style.width = '40px';
    locationHeading.appendChild(locationImage);

    location.appendChild(locationHeading);
    const lineBreak2 = document.createElement('br');
    location.appendChild(lineBreak2);
    const address = document.createElement('p');
    address.innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp; IIT Patna gate no.-1, Amhara Patna 801103 Bihar';
    location.appendChild(address);
    const lineBreak3 = document.createElement('br');
    location.appendChild(lineBreak3); 
    const lineBreak4 = document.createElement('br');
    location.appendChild(lineBreak4);
    element.appendChild(location);
    
    return element;
}

const menuContent = () => {
    const element = document.createElement('div');
    element.classList.add('menu');
    const heading = document.createElement('h1');
    heading.classList.add('heading-menu');
    heading.textContent = 'Menu';
    heading.style.fontWeight = 'bold';
    heading.style.fontSize = '45px';
    heading.style.fontFamily = 'Potta One, cursive';

    
    element.appendChild(heading);

    const beverage = document.createElement('h2');
    beverage.textContent = 'Beverages';
    beverage.style.fontFamily = 'Brush Script MT, cursive';
    beverage.style.fontWeight = 'bold';
    beverage.style.fontSize = '30px';

    const beveragesImg = document.createElement('img');
    beveragesImg.src = 'C:\\Users\\KIIT\\OneDrive\\Desktop\\FE projects\\restaurantPage\\src\\beverages.jpeg';
    beveragesImg.alt = 'NO Image';
    beveragesImg.style.height = '50px';
    beveragesImg.style.width = '50px';
    
    beverage.appendChild(beveragesImg);
    element.appendChild(beverage);

    const beveragesContent = document.createElement('div');
    beveragesContent.classList.add('beveragesContent');

      const honeyTea = document.createElement('div');
      honeyTea.classList.add('honeyTea');

         const headingHoneyTea = document.createElement('h3');
         headingHoneyTea.textContent = 'Honey Tea';
         headingHoneyTea.style.fontWeight = 'bold';
         headingHoneyTea.style.fontSize = '27px';
         headingHoneyTea.style.fontFamily = 'Brush Script MT, cursive';
         honeyTea.appendChild(headingHoneyTea);
        

         

          const contentHoneyTea = document.createElement('p');
          contentHoneyTea.innerHTML = ` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Steep yourself in comfort with a cup of honey tea. Whether you're seeking a soothing sip to chase away the chills or a touch of sweetness to unwind after a long day, honey tea's gentle embrace will melt your worries away.`;
          contentHoneyTea.style.fontWeight = 'bold';
          contentHoneyTea.style.fontSize = '20px';
          contentHoneyTea.style.fontFamily = 'Brush Script MT, cursive';
          honeyTea.appendChild(contentHoneyTea);



          const HoneyTeaPriceAndImage = document.createElement('div');
          HoneyTeaPriceAndImage.classList.add('HoneyTeaPriceAndImage');
        
          const textContentHoneyTea = document.createElement('p');
          textContentHoneyTea.classList.add('textContentHoneyTea');
          textContentHoneyTea.innerHTML = `Rs. 40 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp`;
    

          HoneyTeaPriceAndImage.appendChild(textContentHoneyTea);
        
         const honeyTeaImg = document.createElement('img');
          honeyTeaImg.src = 'C:\\Users\\KIIT\\OneDrive\\Desktop\\FE projects\\restaurantPage\\src\\honeyTea.jpeg';
          honeyTeaImg.alt = 'NO Image';
          honeyTeaImg.style.height = '250px';
          honeyTeaImg.style.width = '250px';
    

          HoneyTeaPriceAndImage.appendChild(honeyTeaImg);
          honeyTea.appendChild(HoneyTeaPriceAndImage);
         
         beveragesContent.appendChild(honeyTea);
         const bearyTea = document.createElement('div');
         bearyTea.classList.add('bearyTea');

          const headingBearyTea = document.createElement('h3');
          headingBearyTea.textContent = 'Beary Tea';
          headingBearyTea.style.fontWeight = 'bold';
          headingBearyTea.style.fontSize = '27px';
          headingBearyTea.style.fontFamily = 'Brush Script MT, cursive';
          bearyTea.appendChild(headingBearyTea);



          const contentBearyTea = document.createElement('p');
          contentBearyTea.innerHTML = ` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp   The world craves creamy indulgence, and milk tea delivers. This delightful drink swirls rich milk with bold tea flavors, offering a symphony of textures with every sip.`
          contentBearyTea.style.fontWeight = 'bold';
          contentBearyTea.style.fontSize = '20px';
          contentBearyTea.style.fontFamily = 'Brush Script MT, cursive';
          bearyTea.appendChild(contentBearyTea);
          
    
          const bearyTeaPriceAndImage = document.createElement('div');
          bearyTeaPriceAndImage.classList.add('bearyTeaPriceAndImage');
          const textAreaBearyTea = document.createElement('p');
          textAreaBearyTea.classList.add('textAreaBearyTea');
          textAreaBearyTea.innerHTML = ' Rs. 60      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';

          bearyTeaPriceAndImage.appendChild(textAreaBearyTea);
       
          const bearyTeaImg = document.createElement('img');
          bearyTeaImg.src = 'C:\\Users\\KIIT\\OneDrive\\Desktop\\FE projects\\restaurantPage\\src\\milk tea.jpeg';
          bearyTeaImg.alt = 'NO image';
          bearyTeaImg.style.height  = '250px';
          bearyTeaImg.style.width = '250px';
          bearyTeaPriceAndImage.appendChild(bearyTeaImg);

          bearyTea.appendChild(bearyTeaPriceAndImage);

          beveragesContent.appendChild(bearyTea);
          element.appendChild(beveragesContent);

          const sides = document.createElement('div');
          sides.classList.add('sides');
          sides.textContent = 'Sides';
          sides.style.fontWeight = 'bold';
          sides.style.fontSize = '35px';
          sides.style.fontFamily = 'Brush Script MT, cursive';

          element.appendChild(sides);

          const sidesImg = document.createElement('img');
          sidesImg.src = 'C:\\Users\\KIIT\\OneDrive\\Desktop\\FE projects\\restaurantPage\\src\\sides.jpeg';
          sidesImg.alt = 'NO Image';
          sidesImg.style.height = '50px';
          sidesImg.style.width = '50px';
          sides.appendChild(sidesImg);

          const sidesContent = document.createElement('div');
          sidesContent.classList.add('sidesContent');

          const ToastAndJam = document.createElement('div');
          ToastAndJam.classList.add('toastandjam');

          const ToastAndJamHeading = document.createElement('p');
          ToastAndJamHeading.textContent = 'Toast and Jam';
          ToastAndJamHeading.style.fontWeight = 'bold';
          ToastAndJamHeading.style.fontSize = '27px';
          ToastAndJamHeading.style.fontFamily = 'Brush Script MT, cursive';
          ToastAndJam.appendChild(ToastAndJamHeading);
          

          const ToastAndJamContent = document.createElement('p');
          ToastAndJamContent.innerHTML = `&nbsp;&nbsp;&nbsp&nbsp;&nbsp; The satisfying crunch of the toast gives way to the sweet burst of the jam, making it a perfect breakfast or a delightful afternoon snack.`;
          ToastAndJamContent.style.fontWeight = 'bold';
          ToastAndJamContent.style.fontSize = '20px';
          ToastAndJamContent.style.fontFamily = 'Brush Script MT, cursive';
          ToastAndJam.appendChild(ToastAndJamContent);

          const priceAndImageToastAndJam = document.createElement('div');
          priceAndImageToastAndJam.classList.add('priceAndImageToastAndJam');

          const priceToastAndJam = document.createElement('p');
          priceToastAndJam.classList.add('priceToastAndJam');
          priceToastAndJam.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Rs. 80`;

          priceAndImageToastAndJam.appendChild(priceToastAndJam);

          const toastAndJamImage = document.createElement('img');
          toastAndJamImage.src = 'C:\\Users\\KIIT\\OneDrive\\Desktop\\FE projects\\restaurantPage\\src\\toast ans jam.jpeg';
          toastAndJamImage.alt = 'NO Image';
          toastAndJamImage.style.height = '250px';
          toastAndJamImage.style.width = '250px';
          priceAndImageToastAndJam.appendChild(toastAndJamImage);

          ToastAndJam.appendChild(priceAndImageToastAndJam);

          sidesContent.appendChild(ToastAndJam);

          const freshFruit = document.createElement('div');
          freshFruit.classList.add('freshFruit');

          const freshFruitHeading = document.createElement('p');
          freshFruitHeading.textContent = 'Fresh Fruit';
          freshFruitHeading.style.fontWeight = 'bold';
          freshFruitHeading.style.fontSize = '27px';
          freshFruitHeading.style.fontFamily = 'Brush Script MT, cursive';
          freshFruit.appendChild(freshFruitHeading);
          

          const freshFruitContent = document.createElement('p');
          freshFruitContent.innerHTML = `&nbsp;&nbsp;&nbsp&nbsp;&nbsp; The cool touch of crisp skin gives way to juicy flesh, exploding with a symphony of sweet and tart flavors.`;
          freshFruitContent.style.fontWeight = 'bold';
          freshFruitContent.style.fontSize = '20px';
          freshFruitContent.style.fontFamily = 'Brush Script MT, cursive';
          freshFruit.appendChild(freshFruitContent);

          const priceAndImagefreshFruit = document.createElement('div');
          priceAndImagefreshFruit.classList.add('priceAndImagefreshFruit');

          const pricefreshFruit = document.createElement('p');
          pricefreshFruit.classList.add('pricefreshFruit');
          pricefreshFruit.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Rs. 100`;

          priceAndImagefreshFruit.appendChild(pricefreshFruit);

          const freshFruitImage = document.createElement('img');
          freshFruitImage.src = 'C:\\Users\\KIIT\\OneDrive\\Desktop\\FE projects\\restaurantPage\\src\\fresh fruit.jpeg';
          freshFruitImage.alt = 'NO Image';
          freshFruitImage.style.height = '250px';
          freshFruitImage.style.width = '250px';
          priceAndImagefreshFruit.appendChild(freshFruitImage);

          freshFruit.appendChild(priceAndImagefreshFruit);

          sidesContent.appendChild(freshFruit);
          
          element.appendChild(sidesContent);

        
          const mainDishes = document.createElement('div');
          mainDishes.classList.add('mainDishes');
          mainDishes.textContent = 'Main Dishes';
          mainDishes.style.fontWeight = 'bold';
          mainDishes.style.fontSize = '35px';
          mainDishes.style.fontFamily = 'Brush Script MT, cursive';
          
          element.appendChild(mainDishes);

          const mainDishesImage = document.createElement('img');
          mainDishesImage.src = 'C:\\Users\\KIIT\\OneDrive\\Desktop\\FE projects\\restaurantPage\\src\\main dishes.jpeg';
          mainDishesImage.alt = 'NO Image';
          mainDishesImage.style.height = '50px';
          mainDishesImage.style.width = '50px';
          mainDishes.appendChild(mainDishesImage);


          const mainDishescontent = document.createElement('div');
          mainDishescontent.classList.add('mainDishesContent');

          const panCakes = document.createElement('div');
          panCakes.classList.add('panCakes');

          const panCakesHeading = document.createElement('p');
          panCakesHeading.textContent = 'PanCakes';
          panCakesHeading.style.fontWeight = 'bold';
          panCakesHeading.style.fontSize = '27px';
          panCakesHeading.style.fontFamily = 'Brush Script MT, cursive';
          panCakes.appendChild(panCakesHeading);

          const panCakesContent = document.createElement('p');
          panCakesContent.innerHTML = `&nbsp;&nbsp;&nbsp&nbsp;&nbsp; Fluffy clouds of happiness drizzled with deliciousness. Stack high with our irresistible pancakes!`;
          panCakesContent.style.fontWeight = 'bold';
          panCakesContent.style.fontSize = '20px';
          panCakesContent.style.fontFamily = 'Brush Script MT, cursive';
          panCakes.appendChild(panCakesContent);

          const priceAndImagePanCakes = document.createElement('div');
          priceAndImagePanCakes.classList.add('priceAndImagePanCakes');

          const pricePanCakes = document.createElement('p');
          pricePanCakes.classList.add('pricePanCakes');
          pricePanCakes.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Rs. 150`;

          priceAndImagePanCakes.appendChild(pricePanCakes);

          const panCakesImage = document.createElement('img');
          panCakesImage.src = 'C:\\Users\\KIIT\\OneDrive\\Desktop\\FE projects\\restaurantPage\\src\\pancakes.jpeg';
          panCakesImage.alt = 'NO Image';
          panCakesImage.style.height = '250px';
          panCakesImage.style.width = '250px';
          priceAndImagePanCakes.appendChild(panCakesImage);

          panCakes.appendChild(priceAndImagePanCakes);

          mainDishescontent.appendChild(panCakes);

          element.appendChild(mainDishescontent);

    return element;
}

const contactContent = () => {
    const element = document.createElement('div');
    element.classList.add('contact');


    const contactUs = document.createElement('h1');
    contactUs.textContent = 'Contact Us';
    contactUs.style.fontWeight = 'bold';
    contactUs.style.fontSize = '60px';
    contactUs.style.fontFamily = 'Brush Script MT, cursive';
    element.appendChild(contactUs);

    const brachOfficer = document.createElement('div');
    brachOfficer.classList.add('branchOfficer');
    const brachOfficerHeading = document.createElement('h2');
    brachOfficerHeading.textContent = 'Papa Bear';
    brachOfficerHeading.style.fontWeight = 'bold';
    brachOfficerHeading.style.fontSize = '45px';
    brachOfficerHeading.style.fontFamily = 'Brush Script MT, cursive';
    brachOfficer.appendChild(brachOfficerHeading);
    const brachOfficerContact1 = document.createElement('p');
    brachOfficerContact1.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Line-1 : xxxx-123-9876`;
    brachOfficerContact1.style.fontWeight = 'bold';
    brachOfficerContact1.style.fontSize = '35px';
    brachOfficerContact1.style.fontFamily = 'Brush Script MT, cursive';
    brachOfficer.appendChild(brachOfficerContact1);
    const brachOfficerContact2 = document.createElement('p');
    brachOfficerContact2.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Line-1 : yyyy-456-5432`;
    brachOfficerContact2.style.fontWeight = 'bold';
    brachOfficerContact2.style.fontSize = '35px';
    brachOfficerContact2.style.fontFamily = 'Brush Script MT, cursive';
    brachOfficer.appendChild(brachOfficerContact2);
    
    element.appendChild(brachOfficer);

    const branchManager = document.createElement('div');
    branchManager.classList.add('branchManager');
    const branchManagerHeading = document.createElement('h2');
    branchManagerHeading.textContent = 'Mama Bear';
    branchManagerHeading.style.fontWeight = 'bold';
    branchManagerHeading.style.fontSize = '45px';
    branchManagerHeading.style.fontFamily = 'Brush Script MT, cursive';
    branchManager.appendChild(branchManagerHeading);
    const branchManagerContact1 = document.createElement('p');
    branchManagerContact1.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Line-1 : zzzz-128-0856`;
    branchManagerContact1.style.fontWeight = 'bold';
    branchManagerContact1.style.fontSize = '35px';
    branchManagerContact1.style.fontFamily = 'Brush Script MT, cursive';
    branchManager.appendChild(branchManagerContact1);
    const branchManagerContact2 = document.createElement('p');
    branchManagerContact2.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Line-1 : pppp-827-2346`;
    branchManagerContact2.style.fontWeight = 'bold';
    branchManagerContact2.style.fontSize = '35px';
    branchManagerContact2.style.fontFamily = 'Brush Script MT, cursive';
    branchManager.appendChild(branchManagerContact2);
    element.appendChild(branchManager);

    const redRose = document.createElement('img');
    redRose.src = 'C:\\Users\\KIIT\\OneDrive\\Desktop\\FE projects\\restaurantPage\\src\\red rose.jpeg';
    redRose.alt = 'No Image';
    redRose.style.height = '250px';
    redRose.style.width = '250px';

    element.appendChild(redRose);

    return element;
}

export {homeContent,menuContent,contactContent};