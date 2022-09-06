import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { useTheme } from '@mui/material';
import Layout from '../components/Layout';

const languages: NextPage = () => {
  return <Layout>Languages</Layout>;
};

export default languages;
