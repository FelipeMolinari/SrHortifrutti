import React, { FormEvent, useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import ReactStars from 'react-stars';
import CustomButtom from '../CustomButton';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Container } from './styles';
import MainApi from '../../services/api/MainApi';
import { FormReviewProps } from '../../typescriptInterface';
import ErrorsList from '../ErrorsList';

interface ReviewFormProps {
  user_rated_id: string;
}
const ReviewForm: React.FC<ReviewFormProps> = ({ user_rated_id }) => {
  const { addToast } = useToasts();
  const { register, handleSubmit, errors, setValue, setError, control } = useForm({
    defaultValues: {
      stars: '',
      reviewer_name: '',
      description: ''
    }
  });

  const submit = handleSubmit(async (data) => {
    try {
      const { description, reviewer_name, stars } = data;
      const review: FormReviewProps = await MainApi.createReview({
        user_rated_id,
        rate_stars: parseInt(stars),
        description,
        reviewer_name
      });
      addToast(`Review enviada com sucesso. rate:${stars}`, { appearance: 'success' });
      console.log(review);
    } catch (error) {
      addToast('Review não foi enviada ao servidor', { appearance: 'error' });

      console.log(error);
    }
  });
  return (
    <Container>
      <form id="form-review" onSubmit={(e) => submit(e)}>
        <span className="do-review">Faça uma avaliação</span>

        <input
          type="text"
          className="name"
          name="reviewer_name"
          placeholder="Nome"
          ref={register}
        />
        <textarea
          name="description"
          id=""
          cols={30}
          rows={6}
          placeholder="Deixe um texto para o vendedor"
          ref={register}
        ></textarea>
        <ErrorsList
          errorArray={Object.keys(errors).map(function (errorNamedIndex) {
            let error = errors[errorNamedIndex];
            return error;
          })}
        ></ErrorsList>
        <div className="footer">
          <div className="custumer-rating">
            <Controller
              name="stars"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: 'Você precisa definir um rate antes de enviar!'
                }
              }}
              render={({ onChange }) => (
                <ReactStars
                  count={5}
                  size={36}
                  color2={'#ffd700'}
                  color1={'#dadada'}
                  onChange={(new_value) => onChange(new_value)}
                />
              )}
            />
          </div>

          <CustomButtom colorName="--color-secundary" type="submit" form="form-review">
            Enviar
          </CustomButtom>
        </div>
      </form>
    </Container>
  );
};

export default ReviewForm;
