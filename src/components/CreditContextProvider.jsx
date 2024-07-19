import React, { useState, useMemo } from "react";

export const CreditContext = React.createContext();

function CreditContextProvider({ children }) {
  const initialCredit = () => {
    const storedCredit = JSON.parse(localStorage.getItem("myCredit"));
    return storedCredit || 0;
  };

  const [selectedDonation, setSelectedDonation] = useState({});
  const [localCredit, setLocalCredit] = useState(initialCredit());
  const [localReceivedDonations, setLocalReceivedDonations] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const sendPostRequest = (selectedDonation) => {
  //   const selectedId = selectedDonation.id;
  //   fetch(
  //     `https://fandom-k-api.vercel.app/8-3/donations/${selectedId}/contribute`,
  //     {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //         // 필요한 경우 인증 토큰 등의 헤더도 추가할 수 있습니다.
  //       },
  //       body: JSON.stringify({ amount: `${localReceivedDonations}` }),
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("서버 응답:", data);
  //       // 성공적으로 업데이트되었음을 사용자에게 알릴 수 있습니다.
  //     })
  //     .catch((error) => {
  //       console.error("PUT 요청 에러:", error);
  //       // 오류 처리
  //     });
  // };

  const handleCreditUpdate = (newCredit) => {
    setLocalCredit(newCredit);
    localStorage.setItem("myCredit", newCredit.toString());
  };

  const handleReceivedDonationsUpdate = (newReceivedDonations) => {
    setLocalReceivedDonations(newReceivedDonations);
    // sendPutRequest(selectedDonation);
  };

  const handleRecharge = (amount) => {
    setLocalCredit(localCredit + amount);
    setIsModalOpen(false);
  };

  const contextValue = useMemo(() => {
    return {
      localCredit,
      localReceivedDonations,
      setLocalReceivedDonations,
      handleCreditUpdate,
      handleReceivedDonationsUpdate,
      handleRecharge,
      selectedDonation,
      setSelectedDonation,
      isModalOpen,
      setIsModalOpen,
    };
  }, [localCredit, localReceivedDonations, selectedDonation, isModalOpen]);

  return (
    <CreditContext.Provider value={contextValue}>
      {children}
    </CreditContext.Provider>
  );
}

export default CreditContextProvider;
