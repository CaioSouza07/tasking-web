import { useState } from "react";

function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [dataModal, setDataModal] = useState(null);

  const open = (data = null) => {
    setDataModal(data);
    setIsOpen(true);
  };

  const close = () => {
    setDataModal(null);
    setIsOpen(false);
  };

  return {
    isOpen,
    dataModal,
    open,
    close,
  };
}

export default useModal;
