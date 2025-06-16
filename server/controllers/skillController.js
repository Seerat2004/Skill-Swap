import Skill from '../models/Skill.js';

export const createSkill = async (req, res) => {
  const { skillOffered, skillWanted, description, availability } = req.body;

  try {
    const skill = new Skill({
      user: req.user._id,
      skillOffered,
      skillWanted,
      description,
      availability,
    });

    const savedSkill = await skill.save();
    res.status(201).json(savedSkill);
  } catch (error) {
    res.status(500).json({ message: "Error posting skill", error });
  }
};

export const getUserSkills = async (req, res) => {
  try {
    const skills = await Skill.find({ user: req.user._id });
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: "Error fetching your skills", error });
  }
};

export const getAllSkills = async (req, res) => {
  try {
    const skills = await Skill.find({ user: { $ne: req.user._id } }).populate('user', 'name email');

    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: "Error fetching skills", error });
  }
};

export const matchSkills = async (req, res) => {
  try {
    // Step 1: Get the current user's skill posts
    const mySkills = await Skill.find({ user: req.user._id });

    // Step 2: Extract all 'skillWanted' values
    const wantedSkills = mySkills.map(skill => skill.skillWanted.toLowerCase());

    // Step 3: Find users who offer those skills (excluding current user)
    const matches = await Skill.find({
      user: { $ne: req.user._id },
      skillOffered: { $in: wantedSkills }
    }).populate('user', 'name email');

    res.json(matches);
  } catch (error) {
    res.status(500).json({ message: 'Error matching skills', error });
  }
};
