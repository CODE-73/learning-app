import { PostgrestError } from '@supabase/supabase-js';
import { useSupabaseClient } from '@learning-app/supabase';
import { TopicSWRKeys } from './keys';
import useSWRMutation from 'swr/mutation';
import {
  TopicDeleteRequest,
  TopicDeleteResponse,
} from '../../services/subject/delete/types';
