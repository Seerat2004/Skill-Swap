import Message from '../models/Message.js';

// Send a message
export const sendMessage = async (req, res) => {
  const { receiver, text } = req.body;

  try {
    const newMessage = await Message.create({
      sender: req.user._id,
      receiver,
      text,
    });

    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ message: 'Failed to send message', error });
  }
};

// Get messages between current user and a specific user
export const getMessages = async (req, res) => {
  const otherUserId = req.params.userId;

  try {
    const messages = await Message.find({
      $or: [
        { sender: req.user._id, receiver: otherUserId },
        { sender: otherUserId, receiver: req.user._id },
      ],
    })
      .sort({ createdAt: 1 })
      .populate('sender receiver', 'name email');

    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch messages', error });
  }
};
