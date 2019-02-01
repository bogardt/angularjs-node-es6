const controller = {};

/**
 * test
 */
controller.test = async (req, res) => {
  return res.status(200).send({
    message: 'ok'
  });
};

export default controller;
