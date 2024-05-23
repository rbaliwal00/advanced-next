import { Sheet } from 'react-modal-sheet';
import { ReactNode, useEffect, useState } from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Button from './Button';
import { useMediaQuery } from '@mui/material';


export interface BottomSheetProps {
  label: string;
  buttonTitle: string;
  buttonFunction?: () => void;
  closeOnBackdropClick: boolean;
  children?: ReactNode
}

const BottomSheet = ({children,...props}:BottomSheetProps) => {

  const [isOpen, setOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleClose = () => {
    console.log('handle speed =>',)
    setOpen(false);
  };

  const handleButtonFunction = () => {
    
    return !props.buttonFunction ? handleClose() : props.buttonFunction()
  };

  const handleBackDropClick = () => {
    return !!props.closeOnBackdropClick ? handleClose() : null;
  }


  return (
    <>
    <button onClick={() => setOpen(true)}>open bottom sheet</button>

    <Sheet isOpen={isOpen} onClose={handleClose}  detent="content-height"  >
      <Sheet.Container style={{ maxWidth: isMobile ? '100%' : '40%', left: isMobile ? '' : '33%' }}>
        <Sheet.Header ></Sheet.Header>
        <Sheet.Content>
          <div className='p-4'>
            <div className="flex gap-2">
              <button onClick={handleClose}>
                <KeyboardBackspaceIcon  />
              </button>
              <h3 className='font-semibold text-[26px]'>{props.label}</h3>
            </div>
            {children}
            <Button text={props.buttonTitle} onClick={handleButtonFunction}  />
          </div>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop  onTap={handleBackDropClick}/>
    </Sheet>
  </>
  );
};

export default BottomSheet;
