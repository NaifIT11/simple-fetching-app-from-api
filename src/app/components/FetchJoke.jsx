'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Container from './Container';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function FetchJoke() {
  const [loading, setLoading] = useState(false);
  const [joke, setJoke] = useState('');
  
  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://api.chucknorris.io/jokes/random');
      setJoke(response.data.value);
    } catch (error) {
      console.error('Error fetching the joke:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <Container>
      <Card>
        <CardHeader>
            <h2 className='text-xl'>Joke:</h2>
        </CardHeader>
        <CardContent>
            <p className="text-sm rounded px-2 py-6">
            {loading ? (
                <Skeleton className="w-full px-4 py-3" />
            ) : (
                joke
            )}
            </p>
        </CardContent>
        <CardFooter className="justify-end">
            <Button onClick={fetchJoke}>Fetch</Button>
        </CardFooter>
      </Card>
    </Container>
  );
}
