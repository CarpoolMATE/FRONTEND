'use client';

import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  ReportFormValues,
  reportSchema,
} from '@/app/(client)/report/[carpoolId]/components/Form/schema';

import Button from '@/components/Button';
import Input from '@/components/Input';

const ReportForm = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { isValid },
  } = useForm<ReportFormValues>({
    defaultValues: {
      reportContent: '',
      reportTitle: '',
    },
    resolver: zodResolver(reportSchema),
  });

  const reportContent = watch('reportContent');

  const handleReport = useCallback((values: ReportFormValues) => {
    console.log(values);
  }, []);

  return (
    <form
      className="flex flex-col px-5"
      style={{ height: `calc(100vh - 64px)` }}
      onSubmit={handleSubmit(handleReport)}
    >
      <div className="flex flex-col gap-2.5">
        <p className="text-sm font-medium text-icon">제목</p>
        <Input
          {...register('reportTitle')}
          placeholder="제목을 입력해주세요."
        />
        <textarea
          {...register('reportContent')}
          rows={10}
          maxLength={200}
          placeholder="불편했던 점들을 자세히 작성해주세요."
          className="w-full resize-none bg-white rounded-[10px] border border-input p-[15px]"
        ></textarea>
        <div className="text-right text-[#b2b2b2] text-sm font-normal leading-[14px] tracking-tight">
          {reportContent.length}/200
        </div>
      </div>
      <div className="mt-auto py-5">
        <Button type="submit" disabled={!isValid}>
          신고하기
        </Button>
      </div>
    </form>
  );
};

export default ReportForm;
