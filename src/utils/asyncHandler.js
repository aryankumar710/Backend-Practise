const asyncHandler = (func) => async (req, res, next) => {
  try {
    await func(req, res, next);
  } catch (e) {
    res.status(e.code || 500).json({
      success: false,
      message: err.message,
    });
  }
};

const asyncHandler2 = (funct) => (req, res, next) => {
  Promise.resolve(funct(req, res, next)).catch((err) => next(err));
};

export { asyncHandler };
