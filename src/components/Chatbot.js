import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (input.trim()) {
      setMessages((prev) => [...prev, { text: input, user: true }]);
      setMessages((prev) => [...prev, { text: "I'm a chatbot! How can I assist?", user: false }]);
      setInput('');
    }
  };

  return (
    <Box>
      <Typography variant="h6">Chat with our Assistant</Typography>
      <Box>
        {messages.map((msg, index) => (
          <Typography key={index} align={msg.user ? 'right' : 'left'}>
            {msg.text}
          </Typography>
        ))}
      </Box>
      <TextField
        fullWidth
        variant="outlined"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask me anything..."
      />
      <Button onClick={handleSend} variant="contained" color="primary">
        Send
      </Button>
    </Box>
  );
};

export default Chatbot;
