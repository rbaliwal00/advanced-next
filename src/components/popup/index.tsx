import React, { useState } from "react";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import styles from './index.module.css'
import { Dialog } from "@mui/material";

type Props = {
  title: string,
  childTitle: string,
  confirm: () => void
}
const Popup = ({ title, childTitle, confirm }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  
  return (
    <div className={styles['create-popup']}>
      <button type="button" className={styles['popup-button']} onClick={()=> setOpen(true)}>Click here</button>
      {
          open && <Dialog open={open} onClose={() => setOpen(false)}>
            <div className={styles.popup}>
                  <div className={styles['popup-tag']}>
                    <h2>{title}</h2>
                    <p>{childTitle}</p>
                  </div>
                  <div className={styles.buttons}>
                    <button
                      onClick={confirm}
                      className={styles['popup-button']}
                    >
                      Confirm
                    </button>
                    <button
                     onClick={()=> setOpen(false)}
                      className={styles['popup-btn']}
                    >
                      Go Back
                    </button>
                  </div>
              </div>
          </Dialog>
        }
    </div>
  );
};
export default Popup;