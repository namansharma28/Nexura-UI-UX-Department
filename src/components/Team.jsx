import React, { useState } from "react";
import styles from "../assets/TeamSection.module.css"; 
import TeamMember from "./membercards";
import Bhumika from "/Bhumika.jpg";
import Ishita from "/Ishita Porwal.jpg";
import Mohanraj from "/Mohanraj_Thakre.png";
import Pankaj from "/Pankaj Chouksey.jpg";
import Rashika from "/Rashika Kori.jpg";
import Yati from "/Yati Agrawal.jpg";
import vishal from "/vishal.jpg";
import soumya from "/soumya.jpg";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const members = [
    // {
    //   image1: Aryan,
    //   name1: "Aryan Singh",
    //   image2: Yashi,
    //   name2: "Yashi Trivedi",
    // },
  ]
  return (
    <div className={styles.dropdown} id="team">
      <div className={styles.mainMembers}>
        <TeamMember 
        
          image1= {vishal}
          name1="Vishal" 
          image2={soumya}
          name2="Soumya Shrivastava" />
      <TeamMember 
            image1= {Bhumika}
            name1="Bhumika" 
            image2={Ishita}
            name2="Ishita Porwal" 
          />
          <TeamMember 
            image1= {Mohanraj}
            name1="Mohanraj Thakre" 
            image2={Pankaj} 
            name2="Pankaj Chouksey"
          />
          <TeamMember 
            image1= {Rashika}
            name1= "Rashika Kori"
            image2= {Yati}
            name2= "Yati Agrawal" 
          />  
          </div>
          {/* <button
        className={styles.button}
        onClick={() => setIsOpen(!isOpen)}
        id="btn"
      >
        {isOpen ? "Show Less" : "Show All Members"}
      </button>
          {isOpen && (
            <div className={styles.content}>
              {members.map((member, index) => (
                <TeamMember 
                  key={index}
                  image1={member.image1}
                  name1={member.name1}
                  image2={member.image2}
                  name2={member.name2}
                />
                
              ))}
            </div>
          )} */}
    </div>
  );
};

export default DropDown;
