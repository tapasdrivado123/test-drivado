import React, { useState } from "react";
// import Header from "./components/Header";
// import Tree from "./components/Tree";
// import ExternalInfo from "./components/ExternalInfo";
// import Tree from "react-d3-tree";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserManagement = () => {
  const treeData = {
    drivado: {
      "company 1": {
        user: ["u1", "u2", "u3"],
        Company: ["c1", "c2"],
      },
      "Company 2": {
        user: ["u1.1", "u2.1", "u3.1", "u4.1"],
      },
      "Company 3": {
        user: ["u1.2"],
        Company: ["c1"],
      },
      "Company 4": {
        user: ["u1.1"],
      },
    },
  };
 
  let childs = []
  //  let 

  Object.keys(treeData?.drivado).forEach((key) =>
    treeData?.drivado[key]?.user?.map((u) => console.log(u, "user"))
  );

  Object.keys(treeData).forEach(d=>Object.keys(treeData[d]).forEach(child=> childs.push(child)))

  console.log(childs,"<--- childs");
  console.log(treeData.drivado);

  const [parentOpen, setparentOpen] = useState(false);

  return (
    <>
      <div className=" flex-wrap justify-center">
        {Object.keys(treeData).map((d) => (
          <>
            <div className="flex cursor-pointer">
              <div>{d}</div>
              <div
                onClick={() => {
                  setparentOpen(!parentOpen);
                }}
              >
                {parentOpen ? "-" : "+"}
              </div>
            </div>
            
          </>
        ))}
       
       {parentOpen && childs.map(c=> (
        <>
        <div> 
          {c}
        </div>
        </>
       ))}
      
      </div>
    </>
  );
};
export default UserManagement;
