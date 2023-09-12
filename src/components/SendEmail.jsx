import { useState } from "react";
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from "@mui/material";
import { texts } from "../data";
import { toast } from 'react-toastify';

const SendEmail = (props) => {
  const [open, setOpen] = useState(props.open);

  const { register, getValues, formState: { errors, isValid } } = useForm({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      text: '',
    },
    mode: 'onChange'
  });

  const handleCancelClick = () => {
    setOpen(false);
    props.stateDialog(false);
  }

  const sendEmail = () => {
    const values = getValues();
    emailjs.send('service_qplg3jn', 'template_s5vbx1x', values, 'o4gBDD3KUoeSh4WcC')
      .then((result) => {
        toast.success(texts[props.lang].resEmail1);
      }, (error) => {
        toast.error(texts[props.lang].resEmail0);
      });
    handleCancelClick();
  }

  return (
    <form>
      <Dialog
        maxWidth="sm"
        open={open}
      >
        <DialogTitle textAlign="center" sx={{ fontSize: "28px", fontWeight: "bold", color: "orange" }}>
          {texts[props.lang].contHead}
        </DialogTitle>
        <DialogContent dividers>
          <TextField
            sx={{ mb: 2 }}
            label={texts[props.lang].contName}
            error={Boolean(errors.name?.message)}
            helperText={errors.name?.message}
            {...register('name', { required: texts[props.lang].reqField })}
            size="small"
            fullWidth
          />
          <TextField
            sx={{ mb: 2 }}
            label="Email"
            error={Boolean(errors.email?.message)}
            helperText={errors.email?.message}
            type="email"
            {...register('email', {
              required: texts[props.lang].reqField, pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: texts[props.lang].badEmail
              }
            })}
            size="small"
            fullWidth
          />
          <TextField
            sx={{ mb: 2 }}
            label={texts[props.lang].contSubj}
            error={Boolean(errors.subject?.message)}
            helperText={errors.subject?.message}
            {...register('subject', { required: texts[props.lang].reqField })}
            size="small"
            fullWidth
          />
          <TextField
            label={texts[props.lang].contText}
            multiline
            minRows={3}
            maxRows={6}
            error={Boolean(errors.text?.message)}
            helperText={errors.text?.message}
            {...register('text', { required: texts[props.lang].reqField })}
            size="small"
            fullWidth />
        </DialogContent>
        <DialogActions>
          <Button disabled={!isValid} onClick={sendEmail} variant="contained">{texts[props.lang].send}</Button>
          <Button sx={{ mr: 2 }} onClick={handleCancelClick} variant="outlined">{texts[props.lang].cancel}</Button>
        </DialogActions>
      </Dialog>
    </form>
  )
}

export default SendEmail;