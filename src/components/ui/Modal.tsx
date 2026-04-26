type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      
      <div 
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      <div className="relative bg-gray-800 text-white rounded-2xl shadow-lg p-6 w-full max-w-md z-10">
        

        {children}
      </div>
    </div>
  );
};

export default Modal;