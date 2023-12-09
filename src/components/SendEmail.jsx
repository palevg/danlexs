import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from "@mui/material";
import { texts } from "../data";
import { toast } from 'react-toastify';

const SendEmail = ({ openDialog, setOpenDialog, lang }) => {

  const { register, getValues, formState: { errors, isValid } } = useForm({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      text: '',
    },
    mode: 'onChange'
  });

  const sendEmail = () => {
    const values = getValues();
    emailjs.send('service_qplg3jn', 'template_s5vbx1x', values, 'o4gBDD3KUoeSh4WcC')
      .then((result) => {
        toast.success(texts[lang].resEmail1);
      }, (error) => {
        toast.error(texts[lang].resEmail0);
      });
    setOpenDialog(false);
  }

  return (
    <form>
      <Dialog
        maxWidth="sm"
        open={openDialog}
      >
        <DialogTitle textAlign="center" sx={{ fontSize: "28px", fontWeight: "bold", color: "orange" }}>
          {texts[lang].contHead}
        </DialogTitle>
        <DialogContent dividers>
          <TextField
            sx={{ mb: 2 }}
            label={texts[lang].contName}
            error={Boolean(errors.name?.message)}
            helperText={errors.name?.message}
            {...register('name', { required: texts[lang].reqField })}
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
              required: texts[lang].reqField, pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: texts[lang].badEmail
              }
            })}
            size="small"
            fullWidth
          />
          <TextField
            sx={{ mb: 2 }}
            label={texts[lang].contSubj}
            error={Boolean(errors.subject?.message)}
            helperText={errors.subject?.message}
            {...register('subject', { required: texts[lang].reqField })}
            size="small"
            fullWidth
          />
          <TextField
            label={texts[lang].contText}
            multiline
            minRows={3}
            maxRows={6}
            error={Boolean(errors.text?.message)}
            helperText={errors.text?.message}
            {...register('text', { required: texts[lang].reqField })}
            size="small"
            fullWidth />
        </DialogContent>
        <DialogActions>
          <Button disabled={!isValid} onClick={sendEmail} variant="contained">{texts[lang].send}</Button>
          <Button sx={{ mr: 2 }} onClick={() => setOpenDialog(false)} variant="outlined">{texts[lang].cancel}</Button>
        </DialogActions>
      </Dialog>
    </form>
  )
}

export default SendEmail;